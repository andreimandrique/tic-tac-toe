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

let runningGame = true;
let playerWinner = "";

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
            playerWinner = cellA;
            gameWon = true;
            break;
        }
    }

    if(gameWon){
        runningGame = false
        playerDisplay.innerText = `Player ${playerWinner} Win`;
        console.log("win");
    }
    else if(!gameBoard.includes("")){
        runningGame = false;
        playerDisplay.innerText = "It's a draw";
        console.log("draw");
    }
}

const playerChoice = function (){
    let player = "O";
    return function(){
        player = player === "O" ? "X" : "O";
        return player;
    }
}();

const playerDisplay = document.getElementById("playerDisplay");
const cell = document.querySelectorAll(".cell");

cell.forEach((element, index)=> {

    element.addEventListener('click', () => {
        
        if(gameBoard[index].includes("X")||gameBoard[index].includes("O")){
            console.log("Invalid");
        }
        else if(!runningGame){
            console.log("Game Over");
        }
        else{
            const player = playerChoice();
            gameBoard[index] = player;
            element.innerHTML = player;

            const oppositePlayerTurnDisplay = (player =="X")?"O":"X";
            playerDisplay.innerText = `Player ${oppositePlayerTurnDisplay} turn`;

            console.log(gameBoard);
            console.log("Play");
            checkTheGame();
        }
        
    })
})

const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", ()=>{
    runningGame = true;

    cell.forEach(element =>{
        element.innerHTML = "";
    })
    
    for(let i=0; i<gameBoard.length; i++){
        gameBoard[i] = "";
    }

    playerDisplay.innerText = "Player ?";
    console.log(gameBoard);
})