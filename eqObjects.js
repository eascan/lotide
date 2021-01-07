const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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



/*
**old code**

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  
  if(object1Keys.length !== object2Keys.length) {
    return false;
  } else {
    for(const property of object1Keys) {
      if(Array.isArray(object1[property]) === true && Array.isArray(object2[property]) === true) {
        if(eqArrays(object1[property], object2[property]) === true) {
          return true;
        } else {
          return false;
        }
      }

      if(object1[property] === object2[property]) {
      return true
    } else {
      return false;
    }
  }
  }
}
*/

/*
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  
  if(object1Keys.length !== object2Keys.length) {
    return false;
  } else {
    for(const property of object1Keys) {
      if(Array.isArray(object1[property]) === true && Array.isArray(object2[property]) === true) {
        if(eqArrays(object1[property], object2[property]) === false) {
        return false
      }
    } else if(object1[property] === object2[property]) {
      return true
    } else {
      return false;
    }
  }
  }
}
*/

// tests 

/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
*/


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false