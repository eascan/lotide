const eqArrays = function (actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
      for(let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
          return false;
      }
    }
  }
  return true;
}


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}


// create a function to check if array has > 2 elements

const atLeastThree = function(array) {
  if(array.length > 2) {
    return true;
  } 
}


// create a function to check if array is even or not

const isEven = function(array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


const middle = function(array) {
  let midNum = 0;
  let emptyArr = [];

  if(isEven(array) && atLeastThree(array) === true) {
    midNum = array.length / 2 - 1;
    return array.splice(midNum, 2);

  } else if(isEven(array) === false && atLeastThree(array) === true) {
    midNum = Math.floor(array.length / 2);
    return array.splice(midNum, 1);

  } else if (atLeastThree(array) !== true) {
    return emptyArr;
  }
}

middle([1]) // => []
middle([1, 2]) // => []

console.log(middle([1, 2, 3])); // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

/*

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
*/