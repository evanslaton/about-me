'use strict';

// Variable and array declarations
var num = 5;
var numGuess;
var counter = 0;
var guessedRight = true;
var correctAnswers = 0;
var vegGuess;
var finalMsg;
var leastFavVeggies = ['tomato', 'eggplant', 'kale'];
var leastFavVeggiesString = leastFavVeggies.join(', ');
var userName;

var questions = ['What is your name potential new friend?',
  'Have I ever been scuba diving?',
  'Is my favorite beverage Diet Dr. Pepper?',
  'Am I a twin?',
  'Do I like to travel?',
  'Is my favorite color blue?',

];
var answers = [];
var answerCorrect = ['Hello potential new friend ' + answers[i] + '. I\'m going to ask you five yes/no questions about me. Please answer using y/n or yes/no.',
  'By jove you\'ve got it!',
  'Heck Yes! I\'m addicted to that stuff.',
  'Right! You\'re not just seeing double!',
  'Good answer! It\'s one of my favorite things to do.',
  'Correct! My favorite color is red.'
];

for (var i = 0; i < questions.length; i++) {
  answers[i] = prompt(questions[i]).toLowerCase();

  // After the user inputs their name, converts their answers into either true or false
  if (i > 0) {
    if (answers[i] === 'y' || answers[i] === 'yes') {
      answers[i] = true;
    } else {
      answers[i] = false;
    }
  }

  // Checks answers and alerts user if they were correct or not
  if (i === 0) {
    answers[i] = answers[i].split('');
    answers[i][0] = answers[i][0].toUpperCase();
    answers[i] = answers[i].join('');
    console.log(answers[i]);
    answerCorrect[i] = 'Hello potential new friend ' + answers[i] + '. I\'m going to ask you five yes/no questions about me. Please answer using y/n or yes/no.';
    alert(answerCorrect[i]);
  } else if ((i === 1 && answers[i] === false) || (i === 2 && answers[i] === true) || (i === 3 && answers[i] === true) || (i === 4 && answers[i] === true) || (i === 5 && answers[i] === false)) {
    alert(answerCorrect[i]);
    correctAnswers++;
  } else if ((i === 1 && answers[i] === true) || (i === 2 && answers[i] === false) || (i === 3 && answers[i] === false) || (i === 4 && answers[i] === false) || ((i === 5 && answers[i] === true))) {
    alert('Wrong...');
  }
}

// // Gets the user's name and introduces the game
// function getName () {
//   userName = prompt('What is your name potential new friend?');
//   console.log('The user\'s name: ', userName);
//   alert('Hello potential new friend ' + userName + '. I\'m going to ask you five yes/no questions about me. Please answer using y/n or yes/no.');
// }

// getName ();

// // Asks the user 5 y/n questions
// function questionOne () {
//   var answerOne = prompt('Have I ever been scuba diving?').toLowerCase();
//   console.log(userName + '\'s answer to the first question:', answerOne);
//   if (answerOne === 'n' || answerOne === 'no') {
//     alert('By jove you\'ve got it!');
//     correctAnswers++;
//   } else {
//     alert('Wrong...');
//   }
// }

// questionOne ();

// // Question 2
// function questionTwo () {
//   var answerTwo = prompt('Is my favorite beverage Diet Dr. Pepper?').toLowerCase();
//   console.log(userName + '\'s answer to the second question:', answerTwo);
//   if (answerTwo === 'y' || answerTwo === 'yes') {
//     alert('Heck Yes! I\'m addicted to that stuff.');
//     correctAnswers++;
//   } else {
//     alert('Wrong...');
//   }
// }

// questionTwo ();

// // Question 3
// function questionThree () {
//   var answerThree = prompt('Am I a twin?').toLowerCase();
//   console.log(userName + '\'s answer to the third question:', answerThree);
//   if (answerThree === 'y' || answerThree === 'yes') {
//     alert('Right! You\'re not just seeing double!');
//     correctAnswers++;
//   } else {
//     alert('Wrong...');
//   }
// }

// questionThree ();

// // Question 4
// function questionFour () {
//   var answerFour = prompt('Do I like to travel?').toLowerCase();
//   console.log(userName + '\'s answer to the fourth question:', answerFour);
//   if (answerFour === 'y' || answerFour === 'yes') {
//     alert('Good answer! It\'s one of my favorite things to do.');
//     correctAnswers++;
//   } else {
//     alert('Wrong...');
//   }
// }

// questionFour ();

// // Question 5
// function questionFive () {
//   var answerFive = prompt('Is my favorite color blue?').toLowerCase();
//   console.log(userName + '\'s answer to the fifth question:', answerFive);
//   if (answerFive === 'n' || answerFive === 'no') {
//     alert('Correct! My favorite color is red.');
//     correctAnswers++;
//   } else {
//     alert('Wrong... it\'s red...');
//   }
// }

// questionFive ();

//Question 6: Gives the user four chances to guess the number
function questionSix () {
  while (numGuess !== num && counter < 4) {
    numGuess = parseInt(prompt('I\'m thinking of a special number between 0 and 25. Guess what it is!'));
    console.log(userName + '\'s guess:', numGuess);

    if (numGuess === num) {
      alert('You have the gift!');
      correctAnswers++;
    } else if (counter === 3) {
      alert('You only had one job... the number was ' + num);
    } else if (numGuess > num) {
      alert('Too high.');
    } else if (isNaN(numGuess)) {
      alert('I said to guess a NUMBER.');
    } else {
      alert('Too low.');
    }
    counter++;
  }
  counter = 0;
}

questionSix ();

// Question 7: Gives the user six chances to guess one of my least favorite vegetables
function questionSeven () {
  while (guessedRight && counter < 6) {
    counter++;
    vegGuess = prompt('Can you guess what one of my least favorite vegetables is?').toLowerCase();
    console.log(userName + '\'s guess:', vegGuess);

    // Accounts for the user entering plural forms
    if (vegGuess === 'tomatoes') {
      vegGuess = 'tomato';
    } else if (vegGuess === 'eggplants') {
      vegGuess = 'eggplant';
    }

    for (var i = 0; i < leastFavVeggies.length; i++) {
      if (vegGuess === leastFavVeggies[i]) {
        alert('Right! I hate ' + leastFavVeggiesString);
        correctAnswers++;
        guessedRight = false;
      }
    }
    if (guessedRight && counter < 6) {
      alert('Nope, try again.');
    } else if (counter === 6) {
      alert('Nope, I hate ' + leastFavVeggiesString);
    }
  }
}

questionSeven ();

// Notifies user how many correct answers they got out of total
if (correctAnswers === 0) {
  finalMsg = answers[0] + ', out of 7 questions you didn\'t get a single one right.';
} else if (correctAnswers > 3) {
  finalMsg = answers[0] + ', you got a whopping ' + correctAnswers + ' out of 7 questions correct!';
} else {
  finalMsg = answers[0] + ', you only got ' + correctAnswers + ' out of 7 questions correct...';
}

alert(finalMsg);