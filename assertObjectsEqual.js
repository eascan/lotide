const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  
  if(object1Keys.length !== object2Keys.length) {
    return false;
  } else {
    for(const property of object1Keys) {

      // creating a condition to check if the second object we're comparing object1 key against has its own identical key name(in this case it's property)
      if(object2Keys.includes(property)){
        // console.log(object1[property]);
        // console.log(object2[property]);
        // creating a condition if object1 key value and object2 key value are both an array
        if(Array.isArray(object1[property]) === true && Array.isArray(object2[property]) === true) {
            // console.log(object1[property]);
            // console.log(object2[property]);
          //creating a condition to check if both arrays are identical
          if(eqArrays(object1[property], object2[property]) !== true) {
            // console.log("eqArrays is false");
          return false;
        } 
      } else if(object1[property] !== object2[property]) {
          // console.log("plain value is false");
        return false;
        }
      }
    }
}
return true;
}


const assertObjectEqual = (actual, expected) => {
  const inspect = require('util').inspect;

  if(eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}



assertObjectEqual({ a: '1', b: 2 }, { b: 3, a: '1' });
assertObjectEqual({ a: '1', b: 2 }, { b: 2, a: '1' });