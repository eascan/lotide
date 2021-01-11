const assert = require('chai').assert.deepEqual;
const middle = require('../middle.js');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert(middle([1, 2, 3]), [2]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });
});
