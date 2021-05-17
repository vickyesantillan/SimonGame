var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var i = 0;
var userClickedPattern = [];

//Sequence function, choose a color
function nextSequence() {
  var randomNumberRange = Math.random() * 4;
  var randomNumber = Math.floor(randomNumberRange);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);
  $('#' + randomChosenColor) //animation
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
  i++;
}

//Play Sound function
function playSound(colorSound) {
  var audio = new Audio('sounds/' + colorSound + '.mp3');
  audio.play();
}

$('.btn').click(function () {
  var userChosenColor = this.id; //storing the button that the user clicked
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  console.log(userChosenColor);
  console.log(userClickedPattern);
});
