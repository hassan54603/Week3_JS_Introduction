/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task: Convert to Arrow Function  🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

/*

------------
function myFunction() {
console.log("Function was invoked!");
};

myFunction();
----------------

let anotherFunction = function (param) {
  return param;
};

anotherFunction("Example");

---------------

let add = function (param1, param2) {
  return param1 + param2;
};

add(1,2);

*/
// step1
let myFunction = () => {
  console.log("Function was invoked!");
};
myFunction();
// step2
let anotherFunction = (param) => {
  return param;
};
anotherFunction("Example");
// step3
let add = (param1, param2) => {
  return param1 + param2;
};
add(1, 2);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task: Rock, Paper, Scissors - Let's play against the computer! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/
// Define global variable to store computer's choice
let computerChoice = "";

// Function to generate computer's choice
function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomIndex];
}

// Function to determine winner
function game(user, computer) {
  /*add your code here*/
  // Generate computer's choice
  generateComputerChoice();

  // Check for tie
  if (user === computerChoice) {
    return "it's a tie";
  }
  // Check for user win
  if (
    (user === "rock" && computerChoice === "scissors") ||
    (user === "paper" && computerChoice === "rock") ||
    (user === "scissors" && computerChoice === "paper")
  ) {
    return "you win!";
  }

  // Otherwise, user loses
  return "you lose!";
}
// Example usage
const user = "rock";
const result = game(user, computerChoice);
console.log(
  `User chose ${user}, computer chose ${computerChoice}, result: ${result}`
);
