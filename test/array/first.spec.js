const { expect } = require('chai');

import first from '../../src/array/first';

describe('#first()', () => {
  it('should return `null` as array is empty', () => {
    expect(first([])).to.equal(null);
  });

  it('should return the first value of the array', () => {
    expect(first([1, 2, 3])).to.equal(1);
  });
});