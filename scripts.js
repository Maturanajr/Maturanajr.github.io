var gameMode = 1;
var gameState = 'waiting';
var scorePlayer1 = 0;
var scorePlayer2 = 0;
var player1 = '';
var player2 = '';
var currentTurn = '';
var sessionType = '';
var websocketClient;
var roomID;
var whoStarted = '';

window.onload = function createGridItems(){
    for(x=0; x<9;x++){
        var grid = document.createElement('input');
        grid.className = 'grid-item';
        grid.value= '';
        grid.maxLength = '1'
        document.getElementById('gameGrid').appendChild(grid);
    };
    //HIDE WINDOWS UNTIL CONNECT SERVER
    document.getElementsByClassName('gameFrame')[0].style.display = 'none';
    document.getElementById('online').style.display = 'none';
    //CONNECT TO SERVER
    websocketClient = new WebSocket('ws://127.0.0.1:53780');
    //WAIT LOAD AND GET ROOMS OPEN. SHOW WINDOWS
    websocketClient.onopen = function(){
        document.getElementById('online').style.display = 'flex';
        updateRoomList();
        console.log('Connected to server');
        };  
};

function showWinner(winner){
    document.getElementsByClassName('gameFrame')[0].style.display = 'none';
    document.getElementsByClassName('winnerEffectBox')[0].style.display = 'flex';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.8)';
    if(winner != '0'){
        if(winner == player1){
            document.getElementsByClassName('winnerName')[0].innerHTML = player1+' venceu!';
            document.getElementsByClassName('winnerName')[0].style.color = 'red';
            scorePlayer1 ++;
        }else{
            document.getElementsByClassName('winnerName')[0].innerHTML = player2+' venceu!';
            document.getElementsByClassName('winnerName')[0].style.color = 'blue';
            scorePlayer2 ++;
        }
    }else{
        document.getElementsByClassName('winnerName')[0].innerHTML = 'Empatou!'
            document.getElementsByClassName('winnerName')[0].style.color = 'darkgray'
    }
}


function calculateWinner(){
    var gridItems = document.getElementsByClassName('grid-item');
    var gridNumbers = [];
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let x = 0;x<gridItems.length;x++){
        let gridItem = gridItems[x]
        let valueNumber = gridItem.value
        gridNumbers.push(gridItem.value)
    }
    const numbersToDeleteSet = new Set(gridNumbers); 
    const baseNumbers = ['0','1','2','3','4','5','6','7','8','9'];
    const remainingNumbers = baseNumbers.filter((name) => {
        return !numbersToDeleteSet.has(name);
      });

    var hasChance = false;
    var blowLimit = false;
    var hasWinner = false;
    winningConditions.forEach(element=>{
        var sum = element.reduce((partialSum, a) => partialSum + Number(gridNumbers[a]), 0);
        var rest = (14-sum)
        let laneWithValue = 0
        element.forEach(laneNumber=>{
            if (gridItems[laneNumber].value != ''){
                laneWithValue ++
            }
        })
        // VERIFY IF STILL HAVE CHANCE TO WIN
        if (laneWithValue == 1){
            remainingNumbers.forEach(numberA=>{
                remainingNumbers.forEach(numberB=>{
                    if (numberB != numberA){
                        if (numberA + numberB == rest){
                            hasChance = true;
                        }
                    }
                })
            })
        }else if (laneWithValue == 2){
            remainingNumbers.forEach(numberA=>{
                if (numberA == rest){
                    hasChance = true;
                }
            })
        }
        /////////
        if(laneWithValue >= 3){
        remainingNumbers.forEach(numbers=>{
                if (rest < 0){
                    blowLimit = true;
                }
                else if (rest == 0){
                    hasWinner = true;
                }
            })
        }
    })
    if (hasWinner){
        showWinner(currentTurn);
    }
    else if (!hasChance  && remainingNumbers.length <= 2){
        showWinner('0');
        }
        /*
    }else if (blowLimit){
        if (currentTurn == '2'){
            scorePlayer2 += 1;
        }else{
            scorePlayer1 += 1;
        }
    }*/
}


function playAgain(){
    const playerName = document.getElementById('playerNameText').value;
    document.getElementsByClassName('gameFrame')[0].style.display = 'flex';
    document.getElementsByClassName('winnerEffectBox')[0].style.display = 'none';
    document.body.style.backgroundColor = 'darkcyan';
    gameState = 'playagain';
 
    let gridItems = document.getElementsByClassName('grid-item');
    let gridItemsList = []
    for(let x = 0;x<gridItems.length;x++){
        let gridItem = gridItems[x];
        gridItemsList.push(gridItem);
    }
    gridItemsList.forEach(item=>{
        item.value = '';
        item.disabled = '';
        item.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        item.style.color = 'black';
    });
    if (whoStarted == player1){
        currentTurn = player2;
        whoStarted = player2;
    }else{
        currentTurn = player1;
        whoStarted = player1;
    };
    updateHostGame();
    //NOTIFY PLAYAGAIN
    if (gameState == 'playagain'){
        websocketClient.send('PLAYAGAIN='+roomID.value+'='+playerName);
    };
    ///////////////
};

function updateRoomList(){
    websocketClient.send('GETROOMS');
    websocketClient.onmessage = function(message){
        console.log()
        if (message.data.startsWith('ROOMLIST')){
            roomlist = message.data.split('=')[1];
            console.log(message.data);
            roomlistdict = JSON.parse(roomlist);
            roomlistdict.forEach(room=>{
                horizontalSeparator = document.createElement('hr');
                horizontalSeparator.className = 'hr';
                let roomitem = document.createElement('div');
                roomitem.className = 'roomItem';
                document.getElementsByClassName('roomItemContainer')[0].appendChild(horizontalSeparator);
                document.getElementsByClassName('roomItemContainer')[0].appendChild(roomitem);
                let roomname = document.createElement('p');
                roomname.innerHTML = room.name;
                let roomhost = document.createElement('p');
                roomhost.innerHTML = room.hostname;
                let roomplayers = document.createElement('p');
                roomplayers.innerHTML = room.players + '/2';

                roomitem.appendChild(roomname);
                roomitem.appendChild(roomhost);
                roomitem.appendChild(roomplayers);
            })
            
        };
    };
};


    //ONLINE FUNCTIONS
function createRoom(mode){
    const playerName = document.getElementById('playerNameText');
    //SEND MESSAGE TO CREATE ROM
    if (mode == 'create'){
        roomID = document.getElementById('createRoomText');
        websocketClient.send('CREATE='+roomID.value+'='+playerName.value);
    //SEND MESSAGE TO JOIN EXISTENT ROOM
    }else if (mode == 'join'){
        roomID = document.getElementById('joinRoomText');
        websocketClient.send('JOIN='+roomID.value+'='+playerName.value);
    };
    //////////////
    websocketClient.onmessage = function(message){
        console.log(message.data);
        message = message.data;
        /// RETORNO DA CONFIRMAÇÃO DE CRIAÇÃO DE SALA
        if (message.startsWith('ROOMCREATED')){
            roomcreated = message.split('=')[1];
            if (roomcreated == 'TRUE'){
                document.getElementById('gameFrame').style.display = 'flex';
                document.getElementById('online').style.display = 'none';
                player1 = playerName.value;
                gameState = 'waiting';
                document.getElementById('currentTurnInfo').innerHTML = 'Aguardando outro jogador';
            }else if (roomcreated == 'FALSE'){
                alert('Falha ao criar a sala. Tente novamente.')
                alert(message.split('=')[2])
            };
        }
        /////////////////////////////
        // CONFIRMAÇÃO DE ENTRADA NA SALA
        else if (message.startsWith('ROOMJOINED')){
            roomjoined = message.split('=')[1];
            if (roomjoined != 'FALSE'){
                gameState = 'playing';
                player1 = roomjoined;
                player2 = playerName.value;
                currentTurn = player1;
                whoStarted = player1;
                document.getElementById('gameFrame').style.display = 'flex';
                document.getElementById('online').style.display = 'none';    
            }else{
                if (message.split('=')[2] == 'MAXPLAYER'){
                    alert('A sala está cheia');
                }else{
                    alert('Falha ao entrar na sala!');
                };

            };
        }
        ///NOTIFICAÇÃO DE ENTRADA DE JOGADOR AO HOST
        else if (message.startsWith('PLAYERJOIN')){
            player2 = message.split('=')[1];
            currentTurn = player1;
            whoStarted = player1;
        }
        //NOTIFICAÇÃO DE SAÍDA DE PLAYER AO HOST
        else if(message.startsWith('PLAYERLEFT')){
            player2 = '';
            scorePlayer2 = 0;
            scorePlayer1 = 0;
        }
        // NOTIFICAÇÃO DE SAÍDA DO HOST
        else if(message.startsWith('HOSTLEFT')){
            document.getElementById('gameFrame').style.display = 'none';
            document.getElementById('online').style.display = 'flex';
            gameState = 'waiting';
            scorePlayer1 = 0;
            scorePlayer2 = 0;
            player1 = '';
            player2 = '';
            currentTurn = player1;
        }
        //ATUALIZAÇÃO DO GRID
        else if (message.startsWith('UPDATEGRID')){
            let gridArray = message.split('=')[1];
            gridArray = gridArray.split(',')
            let gridItems = document.getElementsByClassName('grid-item');
            for(let x = 0;x<gridItems.length;x++){
                gridItems[x].value = gridArray[x]
            }
        }
        // PLAY AGAIN NOTIFY
        else if (message.startsWith('PLAYAGAIN')){
                gameState = 'playing'
            };
        //////////////////////
        updateHostGame();
        calculateWinner();
    };
    window.onchange = function(){
        var target = event.target;
        ///////
        //BLOCK REPETITIVE NUMBERS
        if (target.className == 'grid-item'){
            var gridItems = document.getElementsByClassName('grid-item');
            var gridItemsList = [];
            var gridItemsValueList = [];
            for(let x = 0;x<gridItems.length;x++){
                let gridItem = gridItems[x];
                gridItemsValueList.push(gridItem.value);
                gridItemsList.push(gridItem);
            };
            let count = 0;
            gridItemsValueList.forEach(element => {
            if (element === target.value) {
                count += 1;
            };
            });
            if ( count > 1 || !Number.isInteger(Number(target.value))){
                target.value = ''
                return
            };
            websocketClient.send('UPDATEGRID='+roomID.value+'='+gridItemsValueList);
        };
        /////////////////////
        
    };
};


function updateHostGame(){
    const playerName = document.getElementById('playerNameText').value;
    document.getElementById('scorered').innerHTML = player1 + ': ' + scorePlayer1;
    document.getElementById('scoreblue').innerHTML = player2 + ': ' + scorePlayer2;
    let gridItems = document.getElementsByClassName('grid-item');
    let gridItemsList = []
    for(let x = 0;x<gridItems.length;x++){
        let gridItem = gridItems[x];
        gridItemsList.push(gridItem);
    };
    console.log(gameState);
    // PLAYAGAIN CONTROL
    if (gameState == 'playagain'){
        gridItemsList.forEach(item=>{
            item.disabled = 'true';
        });
        return;
    };
    ///////////////
    //VERIFY IF PLAYER 2 STILL ONLINE
    if(player2 != ''){
        gameState = 'playing';
    }else{
        if (gameState=='playing'){
            gameState='waiting';
            console.log('Player 2 logout');
            alert('Player 2 logout');
            return
        };
    };
    ////////////////////////
    
    // CONTROLE DE STATUS
    if (gameState == 'waiting'){
        gridItemsList.forEach(item=>{
            item.value = '';
            item.disabled = 'true';
        });
    // AÇÕES ENQUANTO A PARTIDA ESTÁ ACONTECENDO
    }else if(gameState == 'playing'){
        document.getElementById('currentTurnInfo').innerHTML = 'Vez de '+currentTurn; 
        if (currentTurn == playerName){
            gridItemsList.forEach(item=>{
                item.disabled = '';
            })
        }else{
            gridItemsList.forEach(item=>{
                item.disabled = 'true';
            })
        };
        //CHANGE PLAYER TURN
        if(currentTurn == player1){currentTurn=player2;}
        else if(currentTurn == player2){currentTurn=player1;};
        /////////////
    };
    
};


