const gameBoard = [
    "x","o","x",
    "o","o","x",
    "x","x","o"
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
    
    if(gameWon){
        console.log("win");
    }
    else if(!gameBoard.includes("")){
        console.log("draw");
    }
}

checkTheGame();