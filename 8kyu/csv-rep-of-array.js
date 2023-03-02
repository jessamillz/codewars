//* DESCRPTION *//
// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.



//* START OF MY SOLUTION *//
function toCsvText(array) {
    let strArr = '';
    for (let i = 0; i < array.length; i++){
        if (i != array.length - 1){
            strArr += array[i].toString() + '\n';
        } else {
            strArr += array[i].toString();
        }
        
    }
    return strArr;
}

toCsvText([[ 0, 1, 2, 3, 4 ],[ 10,11,12,13,14 ],[ 20,21,22,23,24 ],[ 30,31,32,33,34 ]]);

//* END OF MY SOLUTION *//


//* OTHER SOLUTIONS, NOT MINE *//
function toCsvText(array) {
    return array.join('\n');
}

const toCsvText = array => array.join('\n');

