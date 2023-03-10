// PREP - Parameters, Returns, Examples, Pseudocode

//* DESCRPTION *//
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

//* START OF MY SOLUTION *//
// Takes in list of names
// If list is empty, prints no one likes this.
// If the list of names is less than 4, prints Name1, Name2 and Name3 like this.
// If 4 for more, prints the first two names followed by the number of remaining names in the list likes this. Name1, Name2 and # others like this.

function likes(names) {
    let num = names.length;
    let output = '';
    if(num === 0) {
        output = 'no one likes this';
    } else if(num === 1) {
        output = `${names[0]} likes this`;
    } else if(num === 2) {
        output = `${names[0]} and ${names[1]} like this`;
    } else if(num === 3) {
        output = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        output = `${names[0]}, ${names[1]} and ${num - 2} others like this`;
    }
    return output;
}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Peter']));
//* END OF MY SOLUTION *//


//* OTHER SOLUTIONS, NOT MINE *//

function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}

function likes(names) {
    if(names.length === 0) return "no one likes this";
    if(names.length === 1) return names[0] + " likes this";
    if(names.length === 2) return names[0] + " and " + names[1] + " like this";
    if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}