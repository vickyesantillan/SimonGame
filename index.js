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
  //Comparing that each elements are equal
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      //checking that i have compared each element, because the length of the pattern is equal to the length of the chosen colors
      setTimeout(nextSequence(), 1000);
      userClickedPattern = [];
    }
  } else {
    $('body').addClass('game-over');
    setTimeout(function () {
      $('body').removeClass('game-over');
    }, 200);
    $('h1').text('Game Over, Press Any Key to Restart');
    startOver();
  }
}

//Star over the game

function startOver() {
  level = 0;
  i = 0;
  gamePattern = [];
  userClickedPattern = [];
  start = false;
}

$('.btn').click(function () {
  var userChosenColor = this.id; //storing the button that the user clicked
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  var userClickLength = userClickedPattern.length;
  var indexUserClick = userClickLength - 1;
  checkAnswer(indexUserClick);
});
