let computerScore = 0;
let playerScore = 0;

let playerSelection;
let computerSelection;

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const choices = [rock, paper, scissors];

const getRoundMessage = document.getElementById("roundMessage");
let roundMessage = "Let's play!";
getRoundMessage.textContent = roundMessage;

const roundIsTie = "This round is a tie!";
const roundMessagePlayerWin = "You won this round!";
const roundMessageComputerWin = "The computer won this round!";
const gameIsOver = "The game is over!";

const updateImages = () => {
  const getPlayerImage = document.getElementById("playerImage");
  const getComputerImage = document.getElementById("computerImage");
  const createPlayerImage = document.createElement("img");
  const createComputerImage = document.createElement("img");  

  if (playerSelection === rock) {    
    createPlayerImage.src = "images/rock_player.png";
    getPlayerImage.innerHTML = "";
    getPlayerImage.appendChild(createPlayerImage);
  } else if (playerSelection === paper) {
    createPlayerImage.src = "images/paper_player.png";
    getPlayerImage.innerHTML = "";
    getPlayerImage.appendChild(createPlayerImage);
  } else if (playerSelection === scissors) {
    createPlayerImage.src = "images/scissors_player.png";
    getPlayerImage.innerHTML = "";
    getPlayerImage.appendChild(createPlayerImage);
  }

  if (computerSelection === rock) {
    createComputerImage.src = "images/rock_computer.png";
    getComputerImage.innerHTML = "";
    getComputerImage.appendChild(createComputerImage);
  } else if (computerSelection === paper) {
    createComputerImage.src = "images/paper_computer.png";
    getComputerImage.innerHTML = "";
    getComputerImage.appendChild(createComputerImage);
  } else if (computerSelection === scissors) {
    createComputerImage.src = "images/scissors_computer.png";
    getComputerImage.innerHTML = "";
    getComputerImage.appendChild(createComputerImage);
  }
};

const updateScore = () => {
  const getComputerScore = document.getElementById("computerScore");
  getComputerScore.textContent = computerScore;

  const getPlayerScore = document.getElementById("playerScore");
  getPlayerScore.textContent = playerScore;
};

const updateRoundMessage = (roundMessage) => {  
  getRoundMessage.textContent = roundMessage;
};

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

const determineWinner = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return (roundMessage = roundIsTie);
  } else if (playerSelection === rock) {
    if (computerSelection === paper) {
      return (roundMessage = roundMessageComputerWin);
    } else {
      return (roundMessage = roundMessagePlayerWin);
    }
  } else if (playerSelection === paper) {
    if (computerSelection === scissors) {
      return (roundMessage = roundMessageComputerWin);
    } else {
      return (roundMessage = roundMessagePlayerWin);
    }
  } else if (playerSelection === scissors) {
    if (computerSelection === rock) {
      return (roundMessage = roundMessageComputerWin);
    } else {
      return (roundMessage = roundMessagePlayerWin);
    }
  }
};

const playRound = (buttonSelection) => {
  if (endScore()) {
    roundMessage = gameIsOver;
    updateRoundMessage(roundMessage);
  } else {
    playerSelection = buttonSelection;
    computerSelection = getComputerChoice();
    updateImages();

    const result = determineWinner(playerSelection, computerSelection);

    if (roundMessage === roundMessageComputerWin) {
      computerScore++;
      updateScore();
      console.log(computerScore);
    } else if (roundMessage === roundMessagePlayerWin) {
      playerScore++;
      updateScore();
      console.log(playerScore);
    }

    if (endScore()) {
      if (playerScore > computerScore) {
        roundMessage = "You won the game!";
      } else {
        roundMessage = "The computer won the game!";
      }
      updateRoundMessage(roundMessage);
    }
    updateRoundMessage(roundMessage);
  }
};

const endScore = () => {
  return playerScore === 5 || computerScore === 5;
};
