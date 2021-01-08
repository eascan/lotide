const words = ["ground", "control", "to", "major", "tom"];
const cups = ["coffee", "tea", "pop"];

const map = function(array, callback) {
  
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1)


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const eqArrays = function (arr1, arr2) {
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

const results2 = map(cups, cup => cup[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, ['c', 't', 'p']);
assertArraysEqual(results2, ['c', 't']);