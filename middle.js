
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

module.exports = middle;