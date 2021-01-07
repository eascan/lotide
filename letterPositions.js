const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
      for(let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
      }
    }
  }
  return true;
}


const letterPositions = function(sentence) {
  const results = {};
  const noSpaceSentence = sentence.split(" ").join("");
  
  for (let i = 0; i < noSpaceSentence.length; i++) {
      if(!results[noSpaceSentence[i]]) {
        results[noSpaceSentence[i]] = [i];
      } else {
        results[noSpaceSentence[i]].push(i); 
      }
    }
    return results;
  }

  console.log(letterPositions("objects are difficult"));
  console.log(letterPositions("hello"));

  console.log(assertArraysEqual(letterPositions("hello"), {h: [0], e: [1], l: [2, 3], o: [4]}));


  assertArraysEqual(letterPositions("hello").e, [1]);