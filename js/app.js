'use string';

// Gets the user's name and introduces the game
var userName = prompt('What is your name potential new friend?');
console.log('The user\'s name: ', userName);
alert('Hello potential new friend ' + userName + '. I\'m going to ask you five yes/no questions about me. Please answer using y/n or yes/no.');

// Asks the user 5 y/n questions
//Questions 1
var answerOne = prompt('Have I ever been scuba diving?').toLowerCase();
console.log(userName + '\'s answer to the first question:', answerOne);
if (answerOne === 'n' || answerOne === 'no') {
    alert('By jove you\'ve got it!');
} else {
    alert('Wrong...');
}

// Question 2
var answerTwo = prompt('Is my favorite beverage Diet Dr. Pepper?').toLowerCase();
console.log(userName + '\'s answer to the second question:', answerTwo);
if (answerTwo === 'y' || answerTwo === 'yes') {
    alert('Heck Yes! I\'m addicted to that stuff.');
} else {
    alert('Wrong...');
}

// Question 3
var answerThree = prompt('Am I a twin?').toLowerCase();
console.log(userName + '\'s answer to the third question:', answerThree);
if (answerThree === 'y' || answerThree === 'yes') {
    alert('Right! You\'re not just seeing double!');
} else {
    alert('Wrong...');
}

// Question 4
var answerFour = prompt('Do I like to travel?').toLowerCase();
console.log(userName + '\'s answer to the fourth question:', answerFour);
if (answerFour === 'y' || answerFour === 'yes') {
    alert('Good answer! It\'s one of my favorite things to do.');
} else {
    alert('Wrong...');
}

// Question 5
var answerFive = prompt('Is my favorite color blue?').toLowerCase();
console.log(userName + '\'s answer to the fifth question:', answerFive);
if (answerFive === 'n' || answerFive === 'no') {
    alert('Correct! My favorite color is red.');
} else {
    alert('Wrong... it\'s red...');
}