// PREP - Parameters, Returns, Examples, Pseudocode

//* DESCRPTION *//
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""



//* START OF MY SOLUTION *//
function order(words){
    // if str empty, return empty string
    // turn str into array
    // loop through array looking for numbers 1-9
    // push word with lowest number found to new array
    answer = [];
    if(!words) {
        return '';
        } else {
        const wordsArr = words.split(' ');
        for (let i = 1; i <= wordsArr.length; i++){
            wordsArr.forEach(word => {
              if(word.includes(i.toString())) answer.push(word);
            })
        }
    }
    return answer.join(' ');
}

console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
//* END OF MY SOLUTION *//


//* OTHER SOLUTIONS, NOT MINE *//

function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
}

function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(i = 0; i <= array.length; i++) {
      for(j = 0; j < array.length; j++) {
        if(array[j].indexOf(i) >= 0) {
          sortedArray.push(array[j]);
        }
      }
    }
    return sortedArray.join(' ');
}