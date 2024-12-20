// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// MY SOLUTION
function addLength(str){
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] + ' ' + arr[i].length;;
    }
    return arr;
}

console.log(addLength('apple ban'));

//OTHER SOLUTIONS (NOT MINE)
function addLength(str){
    return str.split(' ').map(function(v){return v+' '+v.length})
}

function addLength(str) {
    return str.split(' ').map(word => word + ' ' + word.length)
}

var addLength = s => s.split(' ').map(x => x + ' ' + x.length);