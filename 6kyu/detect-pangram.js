// PREP - Parameters, Returns, Examples, Pseudocode

//* DESCRPTION *//
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//* START OF MY SOLUTION *//
function isPangram(string){
    const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let str = string.toLowerCase();
    for(let i = 0; i < alph.length; i++){
        if(!str.includes(alph[i])) return false;
    }
    return true;
}

console.log(isPangram("The uick brown fox jumps over the lazy dog"));
//* END OF MY SOLUTION *//


//* OTHER SOLUTIONS, NOT MINE *//

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}

function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}

function isPangram(str){
    var alphabet = ['a', 'b', 'c', 'd', 'e',
           'f', 'g', 'h', 'i', 'j',
           'l', 'm', 'n', 'o', 'p',
           'q', 'r', 's', 't', 'u',
           'v', 'w', 'x', 'y', 'z'
         ];
         str=str.toLowerCase();
         for (var i = 0; i < alphabet.length; i++) {
             if (str.indexOf(alphabet[i])<0) {
               return false;
             }
         }
         return true
}