var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var i = 0;
var userClickedPattern = [];
var level = 0;
var start = false;

//starting the game
$(document).keydown(function () {
  $('h1').text('Level ' + level);
  nextSequence();
  start = true;
});

//Sequence function, choose a color
function nextSequence() {
  $('h1').text('Level ' + level);
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
  level++;
}

//Play Sound function
function playSound(colorSound) {
  var audio = new Audio('sounds/' + colorSound + '.mp3');
  audio.play();
}

//Animate press function, add a class to the buttons
function animatePress(currentColor) {
  $('#' + currentColor).addClass('pressed');
  setTimeout(function () {
    $('#' + currentColor).removeClass('pressed');
  }, 100);
}

//Game Logic
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === currentLevel) {
      setTimeout(nextSequence(), 1000);
      userClickedPattern = [];
    }
  } else {
    console.log('wrong');
  }
}

$('.btn').click(function () {
  var userChosenColor = this.id; //storing the button that the user clicked
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(gamePattern.length);
});
