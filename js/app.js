let audioone = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
let audiotwo = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
let audiothree = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
let audiofour = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
let computerPattern = [];
let playedPattern = [];
let userPattern = [];
let buttonOption = [
  ['one', 'red', '#E77471', audioone],
  ['two', 'green', 'lime', audiotwo],
  ['three', 'yellow', '#ffffcc', audiothree],
  ['four', 'blue', 'lightblue', audiofour]
];
let gameActive = false;
let attempts = 0;
let displayPatternOnce = true;
let strictMode = false;

$('#strict').click(function () {
  
  if (strictMode) {
    strictMode = false;
    $('#strict').css('background-color', 'rgb(221, 221, 221)');
    $('#strict').css('color', '#000000');
  } else {
    strictMode = true;
    $('#strict').css('background-color', '#2980b9');
    $('#strict').css('color', '#FFFFFF');
  }
});

//-- start game
$('#start').click(function () {
  
  $('#start').css('background-color', '#2980b9');
  $('#start').css('color', '#FFFFFF');
  $('#start').text('stop');
  
  if (gameActive != false) {
    userPattern = [];
    computerPattern = [];
    clearInterval(gameActive);
    gameActive = false;
    $('#start').css('background-color', 'rgb(221, 221, 221)');
    $('#start').css('color', '#000000');
    $('#start').text('start');
    return;
  }

  console.log("start button pressed!");

  let randomNumber = buttonOption[Math.floor(Math.random() * buttonOption.length)][0];

  computerPattern.push(randomNumber);
  $('#pattern-count').text(computerPattern.length);

  console.log("computer pattern and random number: ", computerPattern[0], randomNumber);

  //play the sound and light the button
  displayPattern(true);

  gameActive = setInterval(function () {
    
    console.log("array lengths: ", computerPattern.length, "user:", userPattern.length);

    if (computerPattern.length > userPattern.length) {
      //displayComputerPatternOnce = false;
    } else if (computerPattern.length <= userPattern.length) {
      
      console.log("Strings: ", computerPattern.toString(), "User: ", userPattern.toString());
      
      if ( computerPattern.toString() == userPattern.toString() ) {
        let randomNumberSecond = buttonOption[Math.floor(Math.random() * buttonOption.length)][0];
        userPattern = [];
        computerPattern.push(randomNumberSecond);
        displayPattern();
        $('#pattern-count').text(computerPattern.length);
      } else {
        //flash wrong and clear userPattern
        userPattern = [];
        if (strictMode) {
          computerPattern = [];
          $('#pattern-count').text(computerPattern.length);
          clearInterval(gameActive);
          gameActive = false;
        }
        displayPattern();
        console.log("YOU LOST!", userPattern, computerPattern);
      }

    }

  }, 1000);

});

// lighting individual buttons
function displayPattern() { // this is for the computer

  //disable buttons so we can play pattern.
  $('#blocker').css('z-index', '10');

  let e;

  for (let i = 0; i < computerPattern.length; i++) {

    setTimeout(function () {
      
      console.log("Computer pattern before activating button: ", computerPattern[i]);

      if (computerPattern[i] === 'one') {
        console.log("one!")
        e = 0;
      } else if (computerPattern[i] === 'two') {
        console.log("two!")
        e = 1;
      } else if (computerPattern[i] === 'three') {
        console.log("three!")
        e = 2;
      } else if (computerPattern[i] === 'four') {
        console.log("four!")
        e = 3;
      }
      
      console.log("e: ", e);
      
      activateButton(buttonOption[e][0], buttonOption[e][1], buttonOption[e][2], buttonOption[e][3], false);
      
      if (computerPattern.length - 1 == i) {
        setTimeout(function() {
          $('#blocker').css('z-index', '-10');
        }, 1000);
      }

    }, 750 * (i + 1));
  }

  //if playedPattern matches computerPattern, that means all the lights have been played and buttons can now be pressed.
  
  

};

function activateButton(selector, defaultColor, activeColor, sound, user) {

  sound.play();

  $('#' + selector).css('background-color', activeColor);

  setTimeout(function () {
    $('#' + selector).css('background-color', defaultColor);
  }, 500);
  
  if (user) {
    userPattern.push(selector);
  }

}

//user clicks sequence

$('#one').click(function () {
  activateButton(buttonOption[0][0], buttonOption[0][1], buttonOption[0][2], buttonOption[0][3], true);
  console.log(userPattern);
});

$('#two').click(function () {
  activateButton(buttonOption[1][0], buttonOption[1][1], buttonOption[1][2], buttonOption[1][3], true);
  console.log(userPattern);
});

$('#three').click(function () {
  activateButton(buttonOption[2][0], buttonOption[2][1], buttonOption[2][2], buttonOption[2][3], true);
  console.log(userPattern);
});

$('#four').click(function () {
  activateButton(buttonOption[3][0], buttonOption[3][1], buttonOption[3][2], buttonOption[3][3], true);
  console.log(userPattern);
});




// listener for start button will start the game.


//-- start round
//I am presented with a random series of button presses.

//-- add random number (1 to 4) to sequence
//Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.

//-- animate sequence

//-- allow user to press buttons and register clicks
//I can see how many steps are in the current series of button presses.
//I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.

//-- if user is wrong, buzz
//If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.

//-- if number of clicks is less than length of sequence, continue waiting for player clicks


//win when:
//I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.

// strict mode (hard)
//I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.

//joanne  - disable user while computer is playing, make the start button inactive or switch to start

//eduardo - fix literal numbers and word numbers between computerPattern and userPattern.
