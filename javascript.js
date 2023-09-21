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

//GAME LOGIC ////////////////////////////////////////////////////////////////////

//GLOBAL VARIABLES
let playerScore = 0;
let computerScore =0;

function getPlayerChoice(playerInput) {
    
    let playerChoice = "_"; // string initialised with content to not trigger null 

     if (playerInput=== "Rock") { //convert both to upper case to make case insensitive
        playerChoice = "Rock";    
    }
    else if (playerInput === "Paper") { 
        playerChoice = "Paper";
    }
    else if (playerInput === "Scissors") { 
        playerChoice = "Scissors";
    }
    
    playerChoiceDisplay.textContent = `Player: ${playerChoice}`; // change the display to what the user chose
    return playRound(playerChoice); // return valid inputs
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
  computerChoiceDisplay.textContent = `Computer: ${computerChoice}`; // change the display to what the computer chose
  return computerChoice; // value to be sent to other functions
}
function playRound (playerChoice) { // plays round and returns result string
    
    let computerChoice = getComputerChoice();

    if (playerChoice === "Rock" && computerChoice === "Scissors" ||  // player wins cases
        playerChoice === "Scissors" && computerChoice === "Paper" ||
        playerChoice === "Paper" && computerChoice === "Rock") { 
        playerScore++;
        return results.textContent =`You win: ${playerChoice} beats ${computerChoice}`;
    }
    else if (computerChoice === "Rock" && playerChoice === "Scissors" ||  // computer wins cases
    computerChoice === "Scissors" && playerChoice === "Paper" ||
    computerChoice === "Paper" && playerChoice === "Rock") { 
        computerScore++;
    return results.textContent =`You lose: ${computerChoice} beats ${playerChoice}`;
}
    else if (computerChoice === playerChoice){
        return results.textContent ="It's a tie!";
    } 
}
function playGame() { // play 5 rounds, display round number, display final result at the end
    for (let round = 1; round <=5; round ++) {
       console.log(`Round ${round}: ${playRound()}`); // playround is called here!
    }
    console.log(`Final Score: Player:${playerScore}, Computer:${computerScore}`); //Display Final Score
}


// EVENT LISTENERS /////////////////////////////////////////////////////////////

//get references to button elements in HTML by class
const btn = document.querySelectorAll('.btn');

//get reference to results div in HTML by id
const results = document.getElementById('results');

// get references to computer and player choice display divs by id 
const playerChoiceDisplay = document.getElementById('playerChoiceDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');

//add click event listeners to buttons that call an unnamed function when pressed
btn.forEach(function(button) {
    button.addEventListener("click",function(){
        let playerInput = (`${button.textContent}`);
        return getPlayerChoice(playerInput);
    });
})




