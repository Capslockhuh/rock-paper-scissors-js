function getComputerChoice() {
    let num = Math.floor(Math.random() * (4 - 1) + 1);
    let choice = " ";
    
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
    if (computerChoice == playerChoice) {
        return "It's a draw!";
    } else if ((computerChoice == "rock" && playerChoice == "paper") || (computerChoice == "paper" && playerChoice == "scissors") || (computerChoice == "scissors" && playerChoice == "rock")) {
        return "You win!";
    } else if ((computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "paper" && playerChoice == "rock") || (computerChoice == "scissors" && playerChoice == "paper")) {
        return "You lose..."
    }
}