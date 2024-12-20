// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//MY SOLUTION
function correct(string) {
    let correctString = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === " "){
        correctString += " ";
      } else if (string[i] == 0) {
        correctString += 'O';
      } else if (string[i] == 5) {
        correctString += 'S';
      } else if (string[i] == 1) {
        correctString += 'I';
      } else {
        correctString += string[i];
      }
    }
    return correctString;
}

console.log(correct('HELL0 W0RLD'));

//OTHER SOLUTION (NOT MINE)
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
//OTHER SOLUTION (NOT MINE)
function correct(string) {
    return string.replace(/0/g, "O")
                 .replace(/5/g, "S")
                 .replace(/1/g, "I");
}

