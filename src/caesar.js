// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input = "", shift, encode = true) {
    //set variable for alphabet
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    //              01234567890123456789012345
    //guard clause: if no value is given for shift or if shift is equal to 0, less than -25, or greater than 25, return false
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    //if encode is false, should decode (shift the other direction)
    if (encode === false) {
      shift *= -1;
    }
    //should ignore capital letters
    const inputLowerCase = input.toLowerCase();
    //set variable to put encoded/decoded message
    let result = "";
    //loop through letters of input
    for (let i = 0; i < input.length; i++) {
      const inputLetter = inputLowerCase[i];
      //account for special characters and punctuations, only shift if the alphabet includes the current letter
      if (alphabet.includes(inputLetter)) {
        //find the shifted index of the current letter in the alphabet
        const indexOfLetter = alphabet.indexOf(inputLetter);
        //add the inputted shift to the shifted index
        let shiftedIndex = indexOfLetter + shift;
        //account for shifting past z and a
        if (shiftedIndex < 0) {
          shiftedIndex += 26;
        } else if (shiftedIndex > 25) {
          shiftedIndex -= 26;
        }
        //add the shifted letter to the result
        result += alphabet[shiftedIndex];
      //otherwise, just add the special character and punctuations to the result
      } else {
        result += input[i];
      }
    }
    //return result
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
