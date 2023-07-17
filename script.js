function getComputerChoice() {
    let num = Math.floor(Math.random() * (4 - 1) + 1);
    let choice = " ";
    
    if (num === 1) {
        choice = "rock"
    } else if (num === 2) {
        choice = "paper"
    } else if (num === 3) {
        choice = "scissors"
    }

    console.log(choice);
}

getComputerChoice()
