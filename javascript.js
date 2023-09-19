//PSEUDOCODE 
/*
    1.initialize round count to 0 and score count set to 0-0
    2. ask player what they choose
    3.when the player decides, generate random choice for computer
    4.compare the two choices
    5.return result of comparison
    6. update score 
    7. repeat process 5 times
    8. stop game at round 5 (exit repetition loop?)
    8.show game result
*/

//GLOBAL VARIABLES
let playerScore = 0;
let computerScore =0;

function getPlayerChoice() {
    let playerInput = prompt("Rock, Paper or Scissors?")
    let playerChoice = "_"; // string has content to not trigger null condition

    if (playerInput === null) { // first check if player presses cancel on the prompt, cannot check later because using .toUpperCase on null causes TypeError
        alert("You need to make a choice!");
        return getPlayerChoice(); // exit the function and call it again 
    }
    else if (playerInput.toUpperCase() === "Rock".toUpperCase()) { //convert both to upper case to make case insensitive
        playerChoice = "Rock";
    }
    else if (playerInput.toUpperCase() === "Paper".toUpperCase()) { 
        playerChoice = "Paper";
    }
    else if (playerInput.toUpperCase() === "Scissors".toUpperCase()) { 
        playerChoice = "Scissors";
    }
    else {
        //console.log("Unknown");
        //playerChoice = "Unknown Player Choice" // if choice unknown ask again until choice is valid
        alert("Make a valid choice!");  
        return getPlayerChoice(); // exit the function and call it again 
    }

    return playerChoice; // return valid inputs
}

function getComputerChoice() {
    
    let randomNum = Math.floor(Math.random() * ((3-1)+1) + 1); //generates 1,2 or 3
    let computerChoice = "";

    // switch statement because the number of choices is finite 
   switch(randomNum) {
    case 1:
        computerChoice = "Rock";
      break;
    case 2:
        computerChoice = "Paper";
      break;
    case 3:
        computerChoice = "Scissors";
  }

  return computerChoice; // value to be sent to other functions
}

function playRound () {
    let playerChoice = getPlayerChoice();
    console.log(`Player: ${playerChoice}`);
    let computerChoice = getComputerChoice();
    console.log(`Computer: ${computerChoice}`);

    
    if (playerChoice === "Rock" && computerChoice === "Scissors" ||  // player wins cases
        playerChoice === "Scissors" && computerChoice === "Paper" ||
        playerChoice === "Paper" && computerChoice === "Rock") { 
        playerScore++;
        return `You win: ${playerChoice} beats ${computerChoice}`;
    }
    else if (computerChoice === "Rock" && playerChoice === "Scissors" ||  // computer wins cases
    computerChoice === "Scissors" && playerChoice === "Paper" ||
    computerChoice === "Paper" && playerChoice === "Rock") { 
        computerScore++;
    return `You lose: ${computerChoice} beats ${playerChoice}`;
}
    else if (computerChoice === playerChoice){
        return "It's a tie!";
    } 
    
}

function playGame() { // play all rounds, display round number, display final result at the end
    

    for (let round = 1; round <=5; round ++) {
        console.log(`Round ${round}: ${playRound()}`); 
    }

    console.log(`Final Score: Player:${playerScore}, Computer:${computerScore}`); //Display Final Score
}

playGame();

