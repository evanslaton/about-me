'use strict';

// Variable and array declarations
var num = Math.floor((Math.random() * 25) + 0);
var numGuess;
var counter = 0;
var stillGuessing = true;
var correctAnswers = 0;
var vegGuess;
var finalMsg;
var leastFavVeggies = ['tomato', 'eggplant', 'kale'];
var leastFavVeggiesString = leastFavVeggies.join(', ');
var qList = document.getElementById('questionsList');
var aList = document.getElementById('answersList');

var questions = ['What is your name potential new friend?',
  'Have I ever been scuba diving?',
  'Is my favorite beverage Diet Dr. Pepper?',
  'Am I a twin?',
  'Do I like to travel?',
  'Is my favorite color blue?'
];
var answers = [];
var answerCorrect = ['Hello potential new friend ' + answers[0] + '. I\'m going to ask you five yes/no questions about me. Please answer using y/n or yes/no.',
  'By jove you\'ve got it!',
  'Heck Yes! I\'m addicted to that stuff.',
  'Right! You\'re not just seeing double!',
  'Good answer! It\'s one of my favorite things to do.',
  'Correct! My favorite color is red.'
];

function newOL(list, id) {
  var newOl= document.createElement('ol');
  newOl.setAttribute('id', id);
  list.appendChild(newOl);
}

function newLi(input, list) {
  var newLi= document.createElement('li');
  newLi.appendChild(document.createTextNode(input));
  list.appendChild(newLi);
}

function firstQuestions() {
  for (var i = 0; i < questions.length; i++) {
    answers[i] = prompt(questions[i]).toLowerCase();

    // Adds questions and answers to guessing-game.html
    if (i > 0) {
      newLi(questions[i], qList);
      newLi(answers[i], aList);
    }

    // After the user inputs their name, converts their answers into either true or false
    if (i > 0) {
      if (answers[i] === 'y' || answers[i] === 'yes') {
        answers[i] = true;
      } else {
        answers[i] = false;
      }
    }

    // Checks answers and alerts user if they were correct or not
    if (i === 0 && answers[i]) {
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
}

firstQuestions();

//Question 6: Gives the user four chances to guess the number
function questionSix () {

  // Adds questions to questions list on guessing-game.html
  newLi('I\'m thinking of a special number between 0 and 25. Guess what it is!', qList);
  console.log('Random number:', num);

  // Adds new ordered list to keep track of guesses for question 6
  newLi('Guesses:', aList);
  newOL(aList, 'numGuessList');

  while (numGuess !== num && counter < 4) {
    numGuess = parseInt(prompt('I\'m thinking of a special number between 0 and 25. Guess what it is!'));
    console.log(answers[0] + '\'s guess:', numGuess);

    newLi(numGuess, numGuessList);

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

questionSix();

// Question 7: Gives the user six chances to guess one of my least favorite vegetables
function questionSeven() {

  // Adds questions to questions list on guessing-game.html
  newLi('Can you guess what one of my least favorite vegetables is?', qList);
  newLi('Guesses:', aList);
  newOL(aList, 'vegGuessList');

  while (stillGuessing && counter < 6) {
    counter++;
    vegGuess = prompt('Can you guess what one of my least favorite vegetables is?').toLowerCase();
    console.log(answers[0] + '\'s guess:', vegGuess);

    newLi(vegGuess, vegGuessList);

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
        stillGuessing = false;
      }
    }
    if (stillGuessing && counter < 6) {
      alert('Nope, try again.');
    } else if (counter === 6) {
      alert('Nope, I hate ' + leastFavVeggiesString);
    }
  }
}

questionSeven();

// Notifies user how many correct answers they got out of total
if (correctAnswers === 0) {
  finalMsg = answers[0] + ', out of 7 questions you didn\'t get a single one right.';
} else if (correctAnswers > 3) {
  finalMsg = answers[0] + ', you got a whopping ' + correctAnswers + ' out of 7 questions correct!';
} else {
  finalMsg = answers[0] + ', you only got ' + correctAnswers + ' out of 7 questions correct...';
}

alert(finalMsg);