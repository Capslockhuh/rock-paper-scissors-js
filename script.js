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

function playRound(computerChoice, initialPlayerChoice) {
    initialPlayerChoice = prompt("Choose rock, paper or scissors"); //Display the prompt window and let the user enter their choice
    if (initialPlayerChoice == null) {
        return "Game cancelled";
    } else {
        playerChoice = initialPlayerChoice.toLowerCase(); //Make the player's choice case-insensitive
    }

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
    let points = 0
    let computerPoints = 0
    for (let i = 1; i <= 5; i++) {
        let result = playRound(getComputerChoice(), "");
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
    console.log(`----------\n Your points: ${points}\n Computer's points ${computerPoints}`);
    console.log(`Final result: \n ${getFinalScore(points, computerPoints)}`);
    return;
}

game();