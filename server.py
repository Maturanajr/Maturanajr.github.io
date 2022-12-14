import asyncio
import genCert
import websockets
from websockets.exceptions import ConnectionClosedOK,ConnectionClosed,ConnectionClosedError
import threading
import ssl
import json


# create handler for each connection
class GameRoom():
    def __init__(self):
        self.ID = 0
        self.MaxPlayers = 2
        self.Players = {}
        self.GridItems = []
        self.Ready = 0
        
    
ROOM_LIST = {}
CLIENT_SOCKET_LIST = []

async def send_message(message):
    for client in CLIENT_SOCKET_LIST:
        await client.send(message)

async def new_client_connected(client_socket, path):
    global CLIENT_SOCKET_LIST
    global ROOM_LIST
    try:
        #CHECK AND DELETE EMPTY ROOMS
        for room,socket in ROOM_LIST.items():
            if len(socket.Players) == 0:
                del ROOM_LIST[room]
        #########
        print('New client connected')
        CLIENT_SOCKET_LIST.append(client_socket)
        while True:
            msg = await  client_socket.recv() 
            print('Message received: {} - FROM:{}'.format(msg,client_socket))
            if msg.startswith('GETROOMS'):
                list_rooms = []
                for roomName,room in ROOM_LIST.items():
                    qtPlayers = len(room.Players)
                    list_rooms.append({"name":roomName,"players":qtPlayers, "hostname":list(room.Players.keys())[0]})
                list_rooms = json.dumps(list_rooms)
                await client_socket.send('ROOMLIST={}'.format(list_rooms))        
           
            elif msg.startswith('CREATE'):
                try:
                    playerName = msg.split('=')[2]
                    roomID = msg.split('=')[1]
                    if (roomID in ROOM_LIST.keys()):
                        await client_socket.send('ROOMCREATED=FALSE=SALA JA EXISTENTE') 
                        continue
                    room = GameRoom()
                    room.ID = roomID
                    room.Players[playerName] = client_socket
                    ROOM_LIST[roomID] = room
                    await client_socket.send('ROOMCREATED=TRUE=')                
                except:
                    await client_socket.send('ROOMCREATED=FALSE=')                
            elif msg.startswith('JOIN'):
                try:
                    playerName = msg.split('=')[2]
                    roomID = msg.split('=')[1]
                    room = ROOM_LIST[roomID]
                    if len(room.Players) >= room.MaxPlayers:
                        await client_socket.send('ROOMJOINED=FALSE=MAXPLAYER')
                        continue
                    host = list(room.Players.keys())[0]
                    room.Players[playerName] = client_socket
                    await room.Players[host].send('PLAYERJOIN={}'.format(playerName))
                    await client_socket.send('ROOMJOINED={}'.format(host))
                except:
                    await client_socket.send('ROOMJOINED=FALSE=')
            elif msg.startswith('UPDATEGRID'):
                grid = msg.split('=')[2]
                roomID = msg.split('=')[1]
                room = ROOM_LIST[roomID]
                for client in room.Players:
                    client_s = room.Players[client]
                    await client_s.send('UPDATEGRID={}'.format(grid))
            elif msg.startswith('PLAYAGAIN'):
                playername = msg.split('=')[2]
                roomID = msg.split('=')[1]
                room = ROOM_LIST[roomID]
                room.Ready += 1
                if (room.Ready == room.MaxPlayers):
                    for client in room.Players:
                        client_s = room.Players[client]
                        await client_s.send('PLAYAGAIN')
                        room.Ready = 0
                    
                
                
                
    except Exception as e:
        print(e)
        print('Client has disconnected. {}'.format(client_socket))
        for room in ROOM_LIST:
            print(room)
            for playerName,socket in ROOM_LIST[room].Players.items():
                print(playerName)
                if client_socket == socket:
                    print(playerName,socket)
                    del ROOM_LIST[room].Players[playerName]
        try:
            CLIENT_SOCKET_LIST.remove(client_socket)
        except:
            pass            

CMD_LIST = {
    'count':['count_users'],
    'list':['list_rooms','list_players']
}
def terminal():
    while True:
        cmd = input()
        if cmd == CMD_LIST['count'][0]:
            print(len(CLIENT_SOCKET_LIST))
        elif cmd == CMD_LIST['list'][0]:
            print(ROOM_LIST.keys())
        elif cmd.startswith(CMD_LIST['list'][1]):
            roomID = cmd.split('=')[1]
            try:
                print(ROOM_LIST[roomID].Players)
            except:
                print('ROOM ID NOT FOUND')

terminalThread = threading.Thread(target=terminal)



async def start_server():
    print('Server started')
    terminalThread.start()
    # tls configs
    ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    ssl_cert = "selfsigned.crt"
    ssl_key = "private.key"
    genCert.cert_gen()
    ssl_context.load_cert_chain(ssl_cert, keyfile=ssl_key)
    await websockets.serve(new_client_connected,"localhost",53780)


if __name__ == '__main__':
    event_loop = asyncio.get_event_loop()
    event_loop.run_until_complete(start_server())
    event_loop.run_forever()