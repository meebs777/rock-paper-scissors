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

// Function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
function playRound (humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`You Tie! Choosing the same option`);
    } else if (humanChoice === "paper" && computerChoice === "rock" ) {
        console.log("You win! Paper beats Rock!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors" ) {
        console.log("You lose! Scissors beats Paper!");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper" ) {
        console.log("You lose! Paper beats Rock!");
        computerScore++;
    }  else if (humanChoice === "rock" && computerChoice === "scissors" ) {
        console.log("You win! Rock beats Scissors!");
        humanScore++;
    }  else if (humanChoice === "scissors" && computerChoice === "rock" ) {
        console.log("You lose! Rock beats Scissors!");
        computerScore++;
    }   else if (humanChoice === "scissors" && computerChoice === "paper" ) {
        console.log("You win! Scissors beats Paper!");
        humanScore++;
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);