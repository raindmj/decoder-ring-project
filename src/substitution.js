// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function hasDuplicateCharacters(string) {
    return new Set(string).size < string.length;
  }

  function substitution(input, alphabet, encode = true) {
    //declare lookup variable with standard alphabet
    let lookup = "abcdefghijklmnopqrstuvwxyz";
    //declare result variable to store result
    let result = "";
    //ignore capital letters (make input lowercase)
    const inputLowerCase = input.toLowerCase();
    //if alphabet parameter has duplicate characters or its length is > 26, return false
    if (
      alphabet === undefined ||
      hasDuplicateCharacters(alphabet) ||
      alphabet.length !== 26
    ) {
      return false;
    }
    //for encoding:
    if (encode) {
      //for each letter in input:
      for (let i = 0; i < inputLowerCase.length; i++) {
        const letterInput = inputLowerCase[i];
        //if the character isn't in lookup, add that character to the result
        if (!lookup.includes(letterInput)) {
          result += letterInput;
        }
        //loop through lookup:
        for (let j = 0; j < lookup.length; j++) {
          const letterLookup = lookup[j];
          //if the character of input matches the character of lookup:
          if (letterInput === letterLookup) {
            //add the character at that index of alphabet to the result
            result += alphabet[j];
          }
        }
      }
      return result;
    }
    //for decoding:
    if (!encode) {
      //for each letter in input:
      for (let i = 0; i < inputLowerCase.length; i++) {
        const letterInput = inputLowerCase[i];
        //if the character isn't in alphabet, add that character to the result
        if (!alphabet.includes(letterInput)) {
          result += letterInput;
        }
        //loop through alphabet:
        for (let j = 0; j < alphabet.length; j++) {
          const letterAlphabet = alphabet[j];
          //if the character of input matches the character of alphabet
          if (letterInput === letterAlphabet) {
            //add the character at that index of lookup to the result
            result += lookup[j];
          }
        }
      }
      return result;
    }
    //else return that character
    //return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
