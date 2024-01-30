// Array that hold color sequence
const buttonColor = ["red", "blue", "green", "yellow"];
// chosen colors
let gamePattern = [];

// Function generate random number between 0 and 3.
function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);

  let randomChosenColor = buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);
}
nextSequence();
