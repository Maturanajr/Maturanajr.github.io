var scoreRed = 0;
var scoreBlue = 0;
var currentTurn = '1';


window.onload = function createGridItems(){
    for(x=0; x<9;x++){
        var grid = document.createElement('input');
        grid.className = 'grid-item';
        grid.setAttribute('data-owner',null)
        grid.value= '';
        document.getElementById('gameGrid').appendChild(grid);
    }
}


function calculateWinner(){
    var gridItems = document.getElementsByClassName('grid-item');
    var gridItemsDict = {};
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
        let owner = gridItem.getAttribute('data-owner')
        let valueNumber = gridItem.value
        gridItemsDict[x] = [owner,valueNumber]
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
        remainingNumbers.forEach(numbers=>{
            if (numbers < rest || remainingNumbers > 1){
                hasChance = true;
            }
            else if (rest < 0){
                blowLimit = true;
            }
            else if (rest == 0){
                hasWinner = true;
            }
        })
    })
    if (!hasChance){
        if (currentTurn == '1'){
            scoreRed += 1;
        }else{
            scoreBlue += 1;
        }
    }else if (blowLimit){
        if (currentTurn == '2'){
            scoreBlue += 1;
        }else{
            scoreRed += 1;
        }
    }else if (hasWinner){
        if (currentTurn == '1'){
            scoreBlue += 1;
        }else{
            scoreRed += 1;
        }
    }
}

function setGridItemOwner(target){
    target.setAttribute('data-owner',currentTurn)
    if (currentTurn == '1'){
        currentTurn = '2';
    }else{
        currentTurn = '1';
    }
}

window.onchange = function updateGridItems(){
    var target = event.target;
    var id = target.id;
    var gridItems = document.getElementsByClassName('grid-item');
    var gridItemsList = []
    if (target.style.backgroundColor == 'rgba(255, 0, 0, 0.8)'){
        target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
    
    for(let x = 0;x<gridItems.length;x++){
        let gridItem = gridItems[x]
        gridItemsList.push(gridItem.value)
    }
    let count = 0;
    gridItemsList.forEach(element => {
    if (element === target.value) {
        count += 1;
    }
    });
    if ( count > 1 || Number(target.value) > 9 || !Number.isInteger(Number(target.value))){
        target.value = ''
        target.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
    }else{
        if (target.getAttribute('value') != ''){
            target.disabled = 'bDisabled';
            setGridItemOwner(target);
        }
    }

    if(currentTurn == '1'){
        document.getElementById('currentTurnInfo').innerHTML = 'Jogada do VERMELHO';
        document.getElementById('currentTurnInfo').style.color = 'red';
    }else{
        document.getElementById('currentTurnInfo').innerHTML = 'Jogada do AZUL';
        document.getElementById('currentTurnInfo').style.color = 'blue';
    }
    calculateWinner();
    document.getElementById('scorered').innerHTML = 'Vermelho: '+scoreRed;
    document.getElementById('scoreblue').innerHTML = 'Azul: '+scoreBlue;
}
