// This function returns a choice of rock paper or scissors by randomly selecting from 0 1 and 2 and asssigning respective strings from the result
function getComputerChoice () {
    let num = Math.floor(Math.random()*3);
    if (num === 0){
        return "rock";
    } else if (num === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

// This function returns the players choice in the game after a prompt
function getHumanChoice () {
    let choice = prompt("Rock, Paper or Scissors?");
    if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
        return choice.toLowerCase();
    } else {
       return getHumanChoice();
    }
}

