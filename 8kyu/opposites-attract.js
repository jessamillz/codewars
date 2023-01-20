// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

//MY SOLUTION
//tried arrow function, did not work
function lovefunc(flower1, flower2){
    if((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower2 % 2 === 0 && flower1 % 2 !== 0)){
      return true;
    } else {
      return false;
    }
}

//OTHER SOLUTIONS
//wouldv'e been so much easier this way. remainder when divided by two will either be 0 (even) or 1 (odd).
function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}

function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 === 1
}

//tried to write the below as an arrow function, didn't work
function lovefunc(flower1, flower2){
    return ((flower1%2==0 && flower2%2!=0) || (flower1%2!=0 && flower2%2==0)) ? true : false;
}

const lovefunc = (f1, f2) => (f1 + f2) % 2 !== 0;

const lovefunc = (Sarah, Timmy) => Boolean((Sarah+Timmy)%2);