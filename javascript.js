//PSEUDOCODE 
/*
    1.initialize round count to 0 and score count set to 0-0
    2. wait for the player to choose between the three buttons (Rock, Paper or Scissors)
    3.when the player decides, generate random choice for computer
    4.compare the two choices
    5.show result of comparison on the results section 
    6. update score 
    7. repeat process 5 times
    8. stop game at round 5 (exit repetition loop?)
    8.show final game score on the results section
*/
// EVENT LISTENERS /////////////////////////////////////////////////////////////

//get references to elements in HTML by class or id
const btn = document.querySelectorAll('.btn');
const results = document.getElementById('results');
const roundCounter = document.getElementById('roundCounter');
const playerChoiceDisplay = document.getElementById('playerChoiceDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const finalScore = document.getElementById('finalScore');

//add click event listeners to buttons that call an unnamed function when pressed
btn.forEach(function(button) {
    button.addEventListener("click",function(){
        if (round < 5) {
            let playerInput = (`${button.textContent}`);
            roundCounter.textContent = `Round: ${round + 1}`;
            checkRound();
            return getPlayerChoice(playerInput); 
            //trigger get getPlayerChoice and pass playerInput value from button that was pressed 
        }
        else {
            return
        }
        
    });
})

//GAME LOGIC ////////////////////////////////////////////////////////////////////

//GLOBAL VARIABLES
let playerScore = 0;
let computerScore =0;
let round = 0;
roundCounter.textContent = `Round: ${round}`;
playerChoiceDisplay.textContent = `Player:`;
computerChoiceDisplay.textContent = `Computer:`;

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
function playRound (playerChoice) { // plays round and changes the text of results display
    if(round < 5) {
        let computerChoice = getComputerChoice();

        if (playerChoice === "Rock" && computerChoice === "Scissors" ||  // player wins cases
            playerChoice === "Scissors" && computerChoice === "Paper" ||
            playerChoice === "Paper" && computerChoice === "Rock") { 
            playerScore++; //increase player score
            return results.textContent =`You win: ${playerChoice} beats ${computerChoice}`;
        }
        else if (computerChoice === "Rock" && playerChoice === "Scissors" ||  // computer wins cases
        computerChoice === "Scissors" && playerChoice === "Paper" ||
        computerChoice === "Paper" && playerChoice === "Rock") { 
            computerScore++; //increase computer score
        return results.textContent =`You lose: ${computerChoice} beats ${playerChoice}`;
    }
        else if (computerChoice === playerChoice){
            return results.textContent ="It's a tie!"; 
        } 
    }
    checkRound(); 
}
function checkRound() { // play 5 rounds, display round number, display final result at the end
    if (round <5) {
        round++;
        finalScore.textContent = `Score: Player: ${playerScore}, Computer: ${computerScore}`;
    }
    else {
        return;
    }
}







