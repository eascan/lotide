
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {

  // inside func, create a variable which is an empty object
  const letterPositions = {};

  // iterate over string input
  for(let i = 0; i < sentence.length; i++) {  
    
    // create if condition - if letter !== " ", 
    if(sentence[i] !== " ") {

      // another if statement, if !letterPositions[sentence[i]] *** ! means if this key is not present in this object *** then add letterPositions[sentence[i]] = 1
      if(!letterPositions[sentence[i]]) {
        letterPositions[sentence[i]] = 1;

         // else letterPositions[sentence[i]] += 1;
      } else {
        letterPositions[sentence[i]] += 1
      }
    }
  }
  // outside of the loop before function ending } we will add return letterPositions(aka out new object)
  return letterPositions;
}

console.log(countLetters("LHL"));
console.log(countLetters("Objects are difficult"));




// here, sentence[i] will be the keyName in the empty object we created, so to add a value to this key, we are useing letterPositions[sentence[i]] = "value"
