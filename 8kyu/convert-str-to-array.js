// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//MY SOLUTION
function stringToArray(string){
    stringList = string.split(" ");
    return stringList;
  }

//OTHER SOLUTION - SHORTER THAN MINE
function stringToArray(string){
    return string.split(' ');
  }