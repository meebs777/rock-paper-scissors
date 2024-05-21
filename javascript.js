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
    if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
        return choice.toLowerCase();
    } else {
       return getHumanChoice();
    }
}


// Start the game off at 0 for both computer and player
let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice,computerChoice) {

}