var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var i = 0;

//Sequence function, choose a color
function nextSequence() {
  var randomNumberRange = Math.random() * 4;
  var randomNumber = Math.floor(randomNumberRange);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);
  $('#' + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  var audio = new Audio(randomChosenColor + '.mp3');
  audio.play();
  i++;
}

$('#green').click(nextSequence);
