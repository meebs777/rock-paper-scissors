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






function playGame() {
    // Start the game off at 0 for both computer and player
    let humanScore = 0;
    let computerScore = 0;

    // Function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
    function playRound (event) {
        let humanChoice = event.target.innerText;
        humanChoice = humanChoice.toLowerCase();
        let computerChoice = getComputerChoice();
        console.log(computerChoice);
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

    
        
    const btns = document.querySelectorAll("button");
    btns.forEach((btn) => {
        btn.addEventListener("click", playRound);
    })

    
    

    
    
    if(humanScore > computerScore) {
        console.log(`You beat the computer ${humanScore}-${computerScore} after 5 rounds!`);
    } else if (computerScore > humanScore){
        console.log(`You lost to the computer ${computerScore}-${humanScore} after 5 rounds!`);
    } else {
        console.log(`You tie to the computer ${computerScore}-${humanScore} after 5 rounds!`);
    }
}

playGame();