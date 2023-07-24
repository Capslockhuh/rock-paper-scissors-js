function getComputerChoice() {
    let num = Math.floor(Math.random() * (4 - 1) + 1);
    let choice = " ";
    
    // Asign the value of choice based on a random number between 1 and 3
    switch (num) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }

    return choice
}

function playRound(computerChoice, playerChoice) {
    PlayerVersus.textContent = playerChoice;
    computerVersus.textContent = computerChoice;


    // The main code that decides the result
    if (computerChoice == playerChoice) {
        return "It's a draw!";
    } else if ((computerChoice == "rock" && playerChoice == "paper") || (computerChoice == "paper" && playerChoice == "scissors") || (computerChoice == "scissors" && playerChoice == "rock")) {
        return "You win!";
    } else if ((computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "paper" && playerChoice == "rock") || (computerChoice == "scissors" && playerChoice == "paper")) {
        return "You lose..."
    } else {
        return "You didn't enter a valid value!";
    }
}

// Assign win numbers to corresponding elements on the DOM tree
function assignWins(player, computer) {
    playerWins.textContent = player;
    computerWins.textContent = computer;
    return;
}

// DOM manipulation
const buttons = document.querySelectorAll(".btn");
const PlayerVersus = document.querySelector("#player-selection");
const computerVersus = document.querySelector("#computer-selection");
const winner = document.querySelector("#winner");

const roundNum = document.querySelector("#round");
const playerWins = document.querySelector("#player-wins");
const computerWins = document.querySelector("#computer-wins")

// Set all the values to default
let playerSelection = ""
computerVersus.textContent = ""
let round = 0;
let pWins = 0;
let cWins = 0;

// DOM manipulation
roundNum.textContent = round;
playerWins.textContent = pWins;
computerWins.textContent = cWins;

// Runs every time a buttton is clicked by the player
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        playerSelection = button.id;
        let result = playRound(getComputerChoice(), playerSelection);
        winner.textContent = result;

        // Assign wins based on the game's result
        switch (result) {
            case "You win!":
                pWins++;
                assignWins(pWins, cWins)
                break;
            case "You lose...":
                cWins++;
                assignWins(pWins, cWins)
                break;
            default:
                break;
    }

        // Count the round number
        round++;
        roundNum.textContent = round;
    });
  });
