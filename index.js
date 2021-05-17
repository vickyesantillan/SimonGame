var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];

function nextSequence() {
  var randomNumberRange = Math.random() * 4;
  var randomNumber = Math.floor(randomNumberRange);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);
}

$('#yellow').click(nextSequence);
