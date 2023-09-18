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
const gameboardDiv = document.querySelector("#game-board");
const messageAreaParagraph = document.querySelector("#message-area");
const startButton = document.querySelector("#start-button");
const resetButton = document.querySelector("#reset-button");

//Functions
function handleResetButton () {
    gameBoard = ["", "", "", "", "", "", "", "", "", ];
    currentPlayer = "X";
    gameIsActive = true;
    elapsedTurns = 0;
    messageAreaParagraph.innerText = "Player X, make your move.";
    const squares = document.querySelector(".square");
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerText = "";
    }
}

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