let computerPattern = [];
let userPattern = [];
let buttonOption = ['one', 'two', 'three', 'four'];
let gameActive = false;
let attempts = 0;


//-- start game
$('#start').click(function () {
  
  computerPattern.push = Math.floor(Math.random() * buttonOption.length);
  
  //play the sound and light the button
  
  gameActive = setInterval( function() {
    
    if (computerPattern.length <= userPattern.length) {
      if (computerPattern.toString() === userPattern.toString()) {
        computerPattern.push = Math.floor(Math.random() * buttonOption.length);
      } else {
      	//flash wrong and clear userPattern
        userPattern = [];
      }
    }
    
  } , 1000);
  
});

// lighting individual buttons

function lightUpLights(id) {
  $('$' + id).addClass(changeColour);
  $('$audio' + id).play();
};

function displayPattern() {
};


//user clicks sequence

$('#one').click(function () {
	userPattern.push(1);
});

$('#two').click(function () {
		userPattern.push(2);
});

$('#three').click(function () {
		userPattern.push(3);
});

$('#four').click(function () {
	userPattern.push(4);
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
