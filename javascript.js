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

    const div = document.querySelector("div");

    // Function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
    function playRound (event) {
        let humanChoice = event.target.innerText;
        humanChoice = humanChoice.toLowerCase();
        let computerChoice = getComputerChoice();
        if (humanChoice === computerChoice) {
            div.innerText = "You Tie! Choosing the same option\n Your score is " + humanScore + "\nThe computers score  is " + computerScore;
        } else if (humanChoice === "paper" && computerChoice === "rock" ) {
            humanScore++;
            div.innerText = "You win! Paper beats Rock!\n Your score is " + humanScore + "\nThe computers score  is " + computerScore;
        } else if (humanChoice === "paper" && computerChoice === "scissors" ) {
            computerScore++;
            div.innerText = "You lose! Scissors beats Paper!\n Your score is " + humanScore + "\nThe computers score  is " + computerScore;
        } else if (humanChoice === "rock" && computerChoice === "paper" ) {
            computerScore++;
            div.innerText = "You lose! Paper beats Rock!\n Your score is " + humanScore + "\nThe computers score  is " + computerScore;
        }  else if (humanChoice === "rock" && computerChoice === "scissors" ) {
            humanScore++;
            div.innerText = "You win! Rock beats Scissors!\n Your score is " + humanScore + "\nThe computers score  is " + computerScore;
        }  else if (humanChoice === "scissors" && computerChoice === "rock" ) {
            computerScore++;
            div.innerText = "You lose! Rock beats Scissors!\n Your score is " + humanScore + "\nThe computers score  is " + computerScore;
        }   else if (humanChoice === "scissors" && computerChoice === "paper" ) {
            humanScore++;
            div.innerText = "You win! Scissors beats Paper!\n Your score is " + humanScore + "\nThe computers score  is " + computerScore;
        }

        if(humanScore === 5 || computerScore === 5) {
            gameWinner();
        }
    }

    
        
    const btns = document.querySelectorAll("button");
    btns.forEach((btn) => {
        btn.addEventListener("click", playRound);
    })

    
    

    function gameWinner() {
        if(humanScore > computerScore) {
            console.log(`You beat the computer ${humanScore}-${computerScore} after 5 rounds!`);
            div.innerText = "You beat the computer" + humanScore + "-" + computerScore + " after 5 rounds!";
        } else if (computerScore > humanScore){
            console.log(`You lost to the computer ${computerScore}-${humanScore} after 5 rounds!`);
            div.innerText = "You lost to the computer "  + humanScore + "-" + computerScore + " after 5 rounds!";
        } else {
            console.log(`You tie with the computer ${computerScore}-${humanScore} after 5 rounds!`);
            div.innerText = "You with the computer"  + humanScore + "-" + computerScore + " after 5 rounds!";
        }
    }
    
    
}

playGame();