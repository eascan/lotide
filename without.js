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


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}


const without = function(source, itemsToRemove) {


  const newArray = [...source]; // cloning source array into new array variable, so source would not change

  for (let i = source.length - 1; i >= 0; i--) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
}



console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"] 
/*
assertArraysEqual(without([1, 2, 3, 4, 5, 6], [1, 2, "4"]), [3, 4, 5, 6]);
assertArraysEqual(without([1, 2, 3, "4", 5, "6"], [1, 2, "4"]), [3, 5, "6"]);
assertArraysEqual(without([1, 2, 3, 4, 5, 6], [1, 2, "4"]), [4, 5, 6]);
*/

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);