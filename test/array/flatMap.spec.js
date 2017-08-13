import { expect } from 'chai';

import flatMap from '../../src/array/flatMap';


describe('#flatMap()', () => {
  it('should flatten the multi-dimensional array to a single-dimensional one ', () => {
    const array = [[1, 2, 3], [4, 5, 6]];
    expect(flatMap(array, val => val)).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });

  it('should flatten to a single-dimensional array without odd numbers', () => {
    const array = [[1, 2, 3], [4, 5, 6]];
    expect(flatMap(array, nums => nums.filter(n => n % 2 === 0)))
      .to.deep.equal([2, 4, 6]);
  });

  it('should throw a type error in case the first argument is not an array', () => {
    expect(() => {
      flatMap();
    }).to.throw();
  });

  it('should throw a type error in case the second argument is not a function', () => {
    expect(() => {
      flatMap([]);
    }).to.throw();
  });
});