// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

//MY SOLUTION --should have used parseInt
function getAge(inputString){
  let age = inputString.split('');
  return Number(age[0]);
}

//OTHER SOLUTIONS NO MINE
function getAge(inputString){
    return parseInt(inputString);
}

function getAge(inputString){
    return parseInt(inputString[0]); 
}

const getAge = parseInt;

function getAge(inputString){
    return Number(inputString[0]);
}