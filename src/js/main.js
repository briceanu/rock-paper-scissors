import { renderTitle } from './renderTitle.js';
import { renderPlayer } from './renderPlayer';
import style from '../style/style.scss';
import rock from '../assets/rock.svg';
import black_640 from '../assets/images/black_640.jpg';
import black_1280 from '../assets/images/black_1280.jpg';
import black_1920 from '../assets/images/black_1920.jpg';
import player from '../assets/player.svg';
import robot from '../assets/robot.svg';
import paper from '../assets/paper.svg';
import scissors2 from '../assets/scissors2.svg';

function main() {
  showAll();
  renderPlayer();

  const rock_btn = document.querySelector('.rock_btn');
  const paper_btn = document.querySelector('.paper_btn');
  const scissors_btn = document.querySelector('.scissors_btn');

  // Global variables
  // Initialise player score to zero
  let playerScore = 0;
  // Initialise computer score to zero
  let computerScore = 0;
  // Initialise games played to zero
  let gamesPlayed = 0;

  // Event listener for click
  document.addEventListener('click', gameSelectionListener);
  // See if the click was on a game selection button (can't apply directly on button as div initially hidden)
  function gameSelectionListener(event) {
    let element = event.target;
    console.log(event.target);
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';
    if (element.classList.contains('rock_btn')) {
      playRound(rock);
      console.log('submitted rock');
    } else if (element.classList.contains('paper_btn')) {
      playRound(paper);
      console.log('submitted paper');
    } else if (element.classList.contains('scissors_btn')) {
      playRound(scissors);
      console.log('submitted paper');
    }
  }
  // Function to randomly generate computer game entries
  function computerPlay() {
    let randomGameValue = Math.floor(Math.random() * 3);
    if (randomGameValue == '0') {
      return 'rock';
    } else if (randomGameValue == '1') {
      return 'paper';
    } else {
      return 'scissors';
    }
  }

  // Main game function
  function playRound(playerSelection) {
    console.log(playerSelection);
    // Generate computer selection
    const computerSelection = computerPlay();
    // Set variable for the player's rock div
    const rockSelected = document.querySelector('.rock_btn');
    // Set variable for the player's paper div
    const paperSelected = document.querySelector('.paper_btn');
    // Set variable for the player's scissors div
    const scissorsSelected = document.querySelector('.scissors_btn');
    // Set variable for the computer's rock div
    const computerRockSelected = document.querySelector('.computer_rock');
    // Set variable for the computer's paper div
    const computerPaperSelected = document.querySelector('.computer_paper');
    // Set variable for the computer's scissors div
    const computerScissorsSelected =
      document.querySelector('.computer_scissors');
    // Loop through computer options
    if (computerSelection == 'rock') {
      // Change the background color of the rock div
      computerRockSelected.style.backgroundColor = '#7987e9';
      // Change the background color of the other divs
      computerPaperSelected.style.backgroundColor = 'white';
      computerScissorsSelected.style.backgroundColor = 'white';
    } else if (computerSelection == 'paper') {
      // Change the background color of the paper div
      computerPaperSelected.style.backgroundColor = '#7987e9';
      // Change the background color of the other divs
      computerRockSelected.style.backgroundColor = 'white';
      computerScissorsSelected.style.backgroundColor = 'white';
    } else if (computerSelection == 'scissors') {
      // Change the background color of the rock div
      computerScissorsSelected.style.backgroundColor = '#7987e9';
      // Change the background color of the other divs
      computerRockSelected.style.backgroundColor = 'white';
      computerPaperSelected.style.backgroundColor = 'white';
    }
    // Convert player entry to string
    let playerSelectionString = String(playerSelection);
    // Convert player selection to all lowercase
    let playerSelectionLowercase = playerSelectionString.toLowerCase();
    // If player selection is rock
    if (playerSelectionLowercase === 'rock') {
      // Change the background color of the rock div
      rockSelected.style.backgroundColor = '#fc5868';
      // Change the background color of the other divs
      paperSelected.style.backgroundColor = 'white';
      scissorsSelected.style.backgroundColor = 'white';
      // If computer selection is rock then draw
      if (computerSelection === 'rock') {
        console.log('Draw!');
        playerScore++;
        computerScore++;
        // Set the score in the player HTML element
        const currentPlayerScore = (document.querySelector(
          '.player_score'
        ).innerHTML = `Score: ${playerScore}`);
        // Set the score in the computer HTML element
        const currentComputerScore = (document.querySelector(
          '.computer_score'
        ).innerHTML = `Score: ${computerScore}`);
        game(playerScore, computerScore);
        return 'draw';
      }
      // If computer selection is paper then lose as paper beats rock
      else if (computerSelection === 'paper') {
        console.log('You lose - paper beats rock!');
        computerScore++;
        // Set the score in the computer HTML element
        const currentComputerScore = (document.querySelector(
          '.computer_score'
        ).innerHTML = `Score: ${computerScore}`);
        game(playerScore, computerScore);
        return 'lose';
      }
      // If computer selection is scissors then win as scissors beats paper
      else {
        console.log('You win - scissors beats paper!');
        playerScore++;
        // Set the score in the player HTML element
        const currentPlayerScore = (document.querySelector(
          '.player_score'
        ).innerHTML = `Score: ${playerScore}`);
        game(playerScore, computerScore);
        return 'win';
      }
    }
    // Else if player selection is paper
    else if (playerSelectionLowercase === 'paper') {
      // Change the background color of the paper div
      paperSelected.style.backgroundColor = '#fc5868';
      // Change the background color of the other divs
      rockSelected.style.backgroundColor = 'white';
      scissorsSelected.style.backgroundColor = 'white';
      // If computer selection is rock then win as paper beats rock
      if (computerSelection === 'rock') {
        console.log('You win - paper beats rock!');
        playerScore++;
        // Set the score in the player HTML element
        const currentPlayerScore = (document.querySelector(
          '.player_score'
        ).innerHTML = `Score: ${playerScore}`);
        game(playerScore, computerScore);
        return 'win';
      }
      // If computer selection is paper then draw
      else if (computerSelection === 'paper') {
        console.log('Draw!');
        playerScore++;
        computerScore++;
        // Set the score in the player HTML element
        const currentPlayerScore = (document.querySelector(
          '.player_score'
        ).innerHTML = `Score: ${playerScore}`);
        // Set the score in the computer HTML element
        const currentComputerScore = (document.querySelector(
          '.computer_score'
        ).innerHTML = `Score: ${computerScore}`);
        game(playerScore, computerScore);
        return 'draw';
      }
      // If computer selection is scissors then lose as scissors beats paper
      else {
        console.log('You lose - scissors beats paper!');
        computerScore++;
        // Set the score in the computer HTML element
        const currentComputerScore = (document.querySelector(
          '.computer_score'
        ).innerHTML = `Score: ${computerScore}`);
        game(playerScore, computerScore);
        return 'lose';
      }
    }
    // Else (player selected scissors)
    else if (playerSelectionLowercase === 'scissors') {
      // Change the background color of the scissors div
      scissorsSelected.style.backgroundColor = '#fc5868';
      // Change the background color of the other divs
      rockSelected.style.backgroundColor = 'white';
      paperSelected.style.backgroundColor = 'white';
      // If computer selection is rock then lose as rock beats scissors
      if (computerSelection === 'rock') {
        console.log('You lose - rock beats scissors!');
        computerScore++;
        // Set the score in the computer HTML element
        const currentComputerScore = (document.querySelector(
          '.computer_score'
        ).innerHTML = `Score: ${computerScore}`);
        game(playerScore, computerScore);
        return 'lose';
      }
      // If computer selection is paper then win as scissors beats paper
      else if (computerSelection === 'paper') {
        console.log('You win - scissors beats paper!');
        playerScore++;
        // Set the score in the player HTML element
        const currentPlayerScore = (document.querySelector(
          '.player_score'
        ).innerHTML = `Score: ${playerScore}`);
        game(playerScore, computerScore);
        return 'win';
      }
      // If computer selection is scissors then draw
      else {
        console.log('Draw!');
        playerScore++;
        computerScore++;
        // Set the score in the player HTML element
        const currentPlayerScore = (document.querySelector(
          '.player_score'
        ).innerHTML = `Score: ${playerScore}`);
        // Set the score in the computer HTML element
        const currentComputerScore = (document.querySelector(
          '.computer_score'
        ).innerHTML = `Score: ${computerScore}`);
        game(playerScore, computerScore);
        return 'draw';
      }
    } else {
      console.log('Invalid entry, please try again.');
      game(playerScore, computerScore);
      return null;
    }
  }
  // Score tracker
  function game(playerScore, computerScore) {
    // Set variable for the game update paragraph tag
    const gameUpdates = document.querySelector('.gameupdates');
    // Set variables for the user and robot win logos
    if (playerScore == 5 || computerScore == 5) {
      if (playerScore > computerScore) {
        let text = document.createTextNode(
          `YOU WIN ${playerScore}:${computerScore}!`
        );
        gameUpdates.appendChild(text);
      } else if (computerScore > playerScore) {
        let text = document.createTextNode(
          `COMPUTER WINS ${computerScore}:${playerScore}!`
        );
        gameUpdates.appendChild(text);
      } else {
        let text = document.createTextNode(`IT WAS A DRAW!`);
        gameUpdates.appendChild(text);
      }
    }
  }
}
main();

function showAll() {
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    button.classList.toggle('hide_button', renderTitle());
  });
}
