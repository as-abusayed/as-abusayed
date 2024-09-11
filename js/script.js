// Number Guessing Game for 2 Players

const randomNumber = Math.floor(Math.random() * 10) + 1;
let player1Attempts = 4; 
let player2Attempts = 4; 
let currentPlayer = 1;
let displayCurrentPlayer = document.querySelector(".player_name span")
 displayCurrentPlayer.innerHTML = currentPlayer 

let button = document.querySelector("#button")



const outputElement = document.querySelector("#game-output");

function updateOutput(message) {
  outputElement.innerHTML += `<p>${message}</p>`;
}



updateOutput("Welcome to the Number Guessing Game!");
updateOutput("Try to guess the number between 1 and 10.");

function makeGuess() {
  const guessInput = document.querySelector("#guess-input");
  let guess = Number(guessInput.value); 

  if (guess < 1 || guess > 10) {
    updateOutput("Please enter a number between 1 to 10.");
    return;
  }

  if (guess === randomNumber) {
    updateOutput(`Congratulations! Player ${currentPlayer} guessed the number correctly.`);
    document.querySelector("button").disabled = true; 
    return;
  } else if (guess < randomNumber) {
    updateOutput("Too low! Try again.");
  } else if (guess > randomNumber) {
    updateOutput("Too high! Try again.");
  }


  if (currentPlayer === 1) {
    player1Attempts--; 
    currentPlayer = 2; 
    displayCurrentPlayer.innerHTML = currentPlayer
  } else {
    player2Attempts--; 
    currentPlayer = 1; 
    displayCurrentPlayer.innerHTML = currentPlayer
  }

  if (player1Attempts === 0 && player2Attempts === 0) {
    updateOutput("No one guessed the number. The correct number was " + randomNumber);
    document.querySelector("button").disabled = true; // Disable the button after game ends
  } else if (player1Attempts === 0) {
    updateOutput("Player 1 has no attempts left.");
  } else if (player2Attempts === 0) {
    updateOutput("Player 2 has no attempts left.");
  }

  guessInput.value = ""; // Clear input field after each guess
}


button.addEventListener("click", makeGuess)