//* DESCRPTION *//
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined



//* START OF MY SOLUTION *//
function countSheeps(arrayOfSheep) {
    let present = 0;
    arrayOfSheep.forEach(element => {
      if (element === true) present++;
    })
    return present
}

//* END OF MY SOLUTION *//


//* OTHER SOLUTIONS, NOT MINE *//

function countSheeps(arrayOfSheep) {
    var count = 0;
    
    arrayOfSheep.forEach( function (sheep) {
      if (sheep)
        count++;
    });
    
    return count;
}

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
}