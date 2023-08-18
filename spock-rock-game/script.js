import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';

const playerScoreEl = document.getElementById('playerScore');
const playerChoiseEl = document.getElementById('playerChoise');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiseEl = document.getElementById('computerChoise');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoise = '';

// Reset all 'selected' icons
function resetSelected() {
  allGameIcons.forEach((icon) => icon.classList.remove('selected'));
  stopConfetti();
  removeConfetti();
}

// Reset Score & playerChoise/computerChoise
function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiseEl.textContent = '';
  computerChoiseEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
}
window.resetAll = resetAll;

// random Computer Choise
function computerRandomChoise() {
  const computerChoiseNumber = Math.random();
  if (computerChoiseNumber < 0.2) {
    computerChoise = 'rock';
  } else if (computerChoiseNumber <= 0.4) {
    computerChoise = 'paper';
  } else if (computerChoiseNumber <= 0.6) {
    computerChoise = 'scissors';
  } else if (computerChoiseNumber <= 0.8) {
    computerChoise = 'lizard';
  } else {
    computerChoise = 'spock';
  }
}

// Add 'selected' styling & computerChoise
function displayComputerChoise() {
  switch (computerChoise) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiseEl.textContent = ' --- Rock';
      break;

    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiseEl.textContent = ' --- Paper';
      break;

    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiseEl.textContent = ' --- Scissors';
      break;

    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiseEl.textContent = ' --- Lizard';
      break;

    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiseEl.textContent = ' --- Spock';
      break;

    default:
      break;
  }
}

// Check resuts, increase scores, update resultText
function updateScore(playerChoise) {
  if (playerChoise === computerChoise) {
    resultText.textContent = "It's a tie.";
  } else {
    const choise = choices[playerChoise];
    if (choise.defeats.indexOf(computerChoise) > -1) {
      startConfetti();
      resultText.textContent = 'You won!';
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = 'You Lost!';
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}

// Call functions to process turn
function checkResult(playerChoise) {
  resetSelected();
  computerRandomChoise();
  displayComputerChoise();
  updateScore(playerChoise);
}

// Passing player selection value and styling icons
function select(playerChoise) {
  checkResult(playerChoise);
  switch (playerChoise) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiseEl.textContent = ' --- Rock';
      break;

    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiseEl.textContent = ' --- Paper';
      break;

    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiseEl.textContent = ' --- Scissors';
      break;

    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiseEl.textContent = ' --- Lizard';
      break;

    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiseEl.textContent = ' --- Spock';
      break;

    default:
      break;
  }
}
window.select = select;

// On startup, set initial values
resetAll();
