//make a gameBoard array representing the cell in tic tac toe
const gameBoard = [
    "","","",
    "","","",
    "","",""
];

//make an array that contain the index of all winning combination in tic tac toe gameBoard Array
const winCondition = [
    [0,1,2],[3,4,5],[6,7,8],

    [0,3,6],[1,4,7],[2,5,8],

    [0,4,8],[2,4,6]
];

//variable for runningGame and playerWinner X or O
let runningGame = true;
let playerWinner = "";

//make a function that check the Game if someone win the game
function checkTheGame(){

    //variable for game if the game is over
    let gameWon = false;

    //loop all winning combination
    for(let i=0; i < winCondition.length; i++){
        
        //get the 3 cell of the winning combition 
        const cellA = gameBoard[winCondition[i][0]];
        const cellB = gameBoard[winCondition[i][1]];
        const cellC = gameBoard[winCondition[i][2]];
        //continue looping 
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        //determine if the 3 cell in tic tac toe is the same
        if(cellA == cellB && cellB == cellC){
            //the game player X or O is stored in playerWinner variable
            playerWinner = cellA;
            //break the loop someone win the game
            gameWon = true;
            break;
        }
    }
    //if game is won
    if(gameWon){
        //stop running the game
        runningGame = false
        //display that the player win
        playerDisplay.innerText = `Player ${playerWinner} Win`;
        console.log("win");
    }
    //if the all gameBoard cell does not include empty string and do not have winner
    else if(!gameBoard.includes("")){
        //stop running the game
        runningGame = false;
        //display that the game is draw
        playerDisplay.innerText = "It's a draw";
        console.log("draw");
    }
}

//immediately invoke function that when called return X then O or O then X
const playerChoice = function (){
    let player = "O";
    return function(){
        player = player === "O" ? "X" : "O";
        return player;
    }
}();

//get the player display 
const playerDisplay = document.getElementById("playerDisplay");
//get all div with a class cell
const cell = document.querySelectorAll(".cell");

//for each cell the element and index
cell.forEach((element, index)=> {

    //for each element click
    element.addEventListener('click', () => {
        
        //invalid if we click a cell that already have X or O
        if(gameBoard[index].includes("X")||gameBoard[index].includes("O")){
            console.log("Invalid");
        }
        //else if game is not running then it is a game over
        else if(!runningGame){
            console.log("Game Over");
        }
        //playing tha gem
        else{
            //get the X or O when clicking
            const player = playerChoice();
            //put X or O in the gameBoard
            gameBoard[index] = player;
            //change the element to X or O
            element.innerHTML = player;

            //show that who's turn it is to click the gameBoard
            const oppositePlayerTurnDisplay = (player =="X")?"O":"X";
            //display player turn
            playerDisplay.innerText = `Player ${oppositePlayerTurnDisplay} turn`;

            console.log(gameBoard);
            console.log("Play");
            //check the game if there is a winner
            checkTheGame();
        }
        
    })
})
//get the reset button
const resetButton = document.getElementById("resetButton");

//add event listener to the reset button
resetButton.addEventListener("click", ()=>{
    //continue playing the game
    runningGame = true;

    //reset the display 
    cell.forEach(element =>{
        element.innerHTML = "";
    })
    //reset the gameBoard
    for(let i=0; i<gameBoard.length; i++){
        gameBoard[i] = "";
    }

    //reset the player turn display
    playerDisplay.innerText = "Player ?";
    
    console.log(gameBoard);
})