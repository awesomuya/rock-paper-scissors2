let computerSelection;
let userSelection;

function gameOne() {
  const rockButton = document.querySelector(".btn1");
  const paperButton = document.querySelector(".btn2");
  const scissorButton = document.querySelector(".btn3");

  rockButton.onclick = function () {
    userSelection = "rock";
    determineWinner();
  };

  paperButton.onclick = function () {
    userSelection = "paper";
    determineWinner();
  };

  scissorButton.onclick = function () {
    userSelection = "scissors";
    determineWinner();
  };
}

function determineWinner() {
  computerSelection = Math.floor(Math.random() * 3);

  if (computerSelection === 0) {
    document.querySelector(".output1").innerHTML = `It's a Tie`;
  } else if (computerSelection === 1) {
    document.querySelector(".output1").innerHTML = `You Lose`;
  } else {
    document.querySelector(".output1").innerHTML = `You Win!`;
  }
}

function resetButton() {
  document.querySelector(".output1").innerHTML = "";
}

// Call the function to set up the game
gameOne();
