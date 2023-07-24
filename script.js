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

function countPoints(result) {

    let points = 0;
    let computerPoints = 0;

    playerPoints.textContent = points;
    computersPoints.textContent = computerPoints;

        switch (result) {
            case "You win!":
                points++;
                computerPoints--;
                assignPoints(points, computerPoints)
                break;
            case "You lose...":
                points--;
                computerPoints++;
                assignPoints(points, computerPoints)
                break;
            default:
                break;
    }
    return;
}

function assignPoints(player, computer) {
    playerPoints.textContent = player;
    computersPoints.textContent = computer;
    return;
}

const buttons = document.querySelectorAll(".btn");
const PlayerVersus = document.querySelector("#player-selection");
const computerVersus = document.querySelector("#computer-selection");
const winner = document.querySelector("#winner");

const roundNum = document.querySelector("#round");
const playerPoints = document.querySelector("#player-points");
const computersPoints = document.querySelector("#computer-points")

let playerSelection = ""
computerVersus.textContent = ""
let round = 0;

roundNum.textContent = round;

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        playerSelection = button.id;
        let result = playRound(getComputerChoice(), playerSelection);
        winner.textContent = result;


        countPoints(result);
        round++;
        roundNum.textContent = round;
    });
  });
