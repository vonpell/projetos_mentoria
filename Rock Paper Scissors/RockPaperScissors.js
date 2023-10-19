const prompt = require("prompt-sync")();

const choices = ["rock", "paper", "scissors"];

let computerScore = 0;
let playerScore = 0;

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

const determineWinner = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "The game is a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
};

const playRound = () => {
  let playerSelection = prompt(
    "Choose rock, paper or scissors: "
  ).toLowerCase();
  console.log(playerSelection);
  let computerSelection = getComputerChoice().toLowerCase();
  console.log(computerSelection);

  const result = determineWinner(playerSelection, computerSelection);
  console.log(result);
  if (result === "The computer won!") {
    computerScore++;
  } else if (result === "You won!") {
    playerScore++;
  }
};

for (let i = 0; i < 5; i++) {
  playRound();
  console.log(
    `The score is: Computer: ${computerScore} - Player: ${playerScore}`
  );
}
