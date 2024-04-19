const gameBoard = [
    "","","",
    "","","",
    "","",""
];

const winCondition = [
    [0,1,2],[3,4,5],[6,7,8],

    [0,3,6],[1,4,7],[2,5,8],

    [0,4,8],[2,4,6]
];

function checkTheGame(){

    let gameWon = false;

    for(let i=0; i < winCondition.length; i++){
    
        const cellA = gameBoard[winCondition[i][0]];
        const cellB = gameBoard[winCondition[i][1]];
        const cellC = gameBoard[winCondition[i][2]];
    
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            gameWon = true;
            break;
        }
    }

    let runningGame = false;

    if(gameWon){
        runningGame = false
        console.log("win");
    }
    else if(!gameBoard.includes("")){
        runningGame = false;
        console.log("draw");
    }
    
}

const playerChoice = function (){
    let player = "X";
    return function(){
        player = player === "X" ? "O" : "X";
        return player;
    }
}();



const cell = document.querySelectorAll(".cell");

cell.forEach((element, index)=> {

    element.addEventListener('click', () => {
        
        if(gameBoard[index].includes("X")||gameBoard[index].includes("O")){
            console.log("Invalid");
            checkTheGame();
        }
        else{
            const player = playerChoice();
            gameBoard[index] = player;
            element.innerHTML = player;
            console.log(gameBoard);
            checkTheGame();
        }
        
    })
})