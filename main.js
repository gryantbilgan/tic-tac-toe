//Constants
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


//State variables
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameIsActive = true;
let elapsedTurns = 0;


//DOM Selectors
const gameBoardDiv = document.querySelector("#game-board");
const messageAreaParagraph = document.querySelector("#message-area");
// const startButton = document.querySelector("#start-button");
const resetButton = document.querySelector("#reset-button");

//Functions
// function handleStartButton () {
//     console.log("The start button has been click");
//     startButton.disabled = true;
//     startButton.style.display = "none";
//     gameBoard = ["", "", "", "", "", "", "", "", ""];
// }

function handleResetButton () {
    console.log("The reset button has been clicked");
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameIsActive = true;
    elapsedTurns = 0;
    messageAreaParagraph.innerText = "Player X, make your move.";
    let squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerText = "";
    }
}
//Check win 
function checkWin () {
    for (let i = 0; i < winningCombos.length; i++) {
        let foundWinner = true;
        for (let j = 0; j < winningCombos[i].length; j++) {
            console.log(winningCombos[i][j]);
            const gameBoardIndex = winningCombos[i][j];
            if (gameBoard[gameBoardIndex] !== currentPlayer) {
                foundWinner = false;
                break
            }
        }
        if (foundWinner) {
            return true;
        }
    }
    return false;
}

function handleGameBoardClick (event) {
    console.log(`The player just clicked on square number ${event.target.id}`);
    if (gameBoard[event.target.id] === "") {
        event.target.innerText = currentPlayer;
        gameBoard[event.target.id] = currentPlayer;
        elapsedTurns++;

        if (elapsedTurns === 9) {
            console.log("Cat's game");
            messageAreaParagraph.innerText = "It's a cat's game! Try again."
        } else if (checkWin()) {
            gameIsActive = false;
            messageAreaParagraph.innerText = `${currentPlayer} has won!`
        } else {
            currentPlayer === "X" ? currentPlayer = "O" : currentPlayer = "X"
            messageAreaParagraph.innerText = `Player ${currentPlayer}, make your move.`
        }
        console.log(gameBoard);
    }
}



//Event listeners
resetButton.addEventListener("click", handleResetButton);
// startButton.addEventListener("click", handleStartButton);
gameBoardDiv.addEventListener("click", handleGameBoardClick);



// const GAMEBOARD_ID = "game-board";
// const RESET_BUTTON_ID = "reset-button";
// const START_BIUTTON_ID = "start-button";


// let currentPlayer = "X";
// let gameBoard = ["", "", "", "", "", "", "", "", "", "", ""];
// let gameIsActive = true;
// let elapsedTurns = 0;


// const startButton = document.getElementById("start-button");
// const resetButton = document.getElementById("reset-button");



// startButton.addEventListener("click", initializeGame);
// resetButton.addEventListener("click", resetGame);


// function initializeGame () {
//     startButton.disabled = true;
//     resetButton.disabled = false;
//     gameBoard.innerHTML = "";
//     render();
// }

// function render () {
//     createSquare();
// }

// function createSquare () {
//     const square = document.createElement("div");
//     tile.classList.add("square");

// }