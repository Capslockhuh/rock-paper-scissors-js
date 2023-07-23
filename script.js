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

function getFinalScore(yourPoints, otherPoints) {
    if (yourPoints > otherPoints) {
        return "You won the game!";
    } else if (yourPoints == otherPoints) {
        return "The game resulted in a draw";
    } else {
        return "You lost :(";
    }
}

function game() {
    // Reset the points during a new game
    let points = 0
    let computerPoints = 0
    for (let i = 1; i <= 5; i++) {
        let result = playRound(getComputerChoice(), "");
        // Display this every time the playRound(...) function is called in this loop
        console.log(`Round ${i}: \n`);
        console.log(result)

        switch (result) {
            case "You win!":
                points++;
                computerPoints--;
                break;
            case "You lose...":
                points--;
                computerPoints++;
                break;
            default:
                break;
    }
}
    // Ending message
    console.log(`----------\n Your points: ${points}\n Computer's points ${computerPoints}`);
    console.log(`Final result: \n ${getFinalScore(points, computerPoints)}`);
    return;
}

const buttons = document.querySelectorAll(".btn");
const choiceDisplay = document.querySelector(".choice");
const PlayerVersus = document.querySelector("#player-selection");
const computerVersus = document.querySelector("#computer-selection");

let playerSelection = ""

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        playerSelection = button.id;
    });
  });

const roundNum = document.querySelector("#round");
const playerPoints = document.querySelector("#player-points");
const computerPoints = document.querySelector("#computer-points")



