//THIS SOLUTION WORKS BUT I DIDN'T KNOW HOW TO USE THE String.prototype.toJadenCase
function toJadenCase(str) {
  arrayOfWords = str.split(' ');
  for (let i = 0; i < arrayOfWords.length; i++) {
    arrayOfWords[i] = arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].substr(1);
  };
  const newString = arrayOfWords.join(' ');
  return newString;
}

let string = "How can mirrors be real if our eyes aren't real";
console.log(toJadenCase(string));

// CORRECT SOLUTIONS, NOT MINE
String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

  String.prototype.toJadenCase = function() {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
  };

  String.prototype.toJadenCase = function () {
    var words = this.split(' ');
  
    for(var i = 0, wordsLen = words.length; i < wordsLen; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  
    return words.join(' ');
  };