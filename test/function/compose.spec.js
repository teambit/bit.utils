import chai from 'chai';
import compose from '../../src/function/compose';
const should = chai.should();

describe('compose', () => {
  function mapPlusOne(arr) {
    return arr.map(x => x + 1);
  }

  function mapMinusOne(arr) {
    return arr.map(x => x - 1);
  }

  function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
  }

  it('the compose function should exist', () => {
    return should.exist(compose);
  });

  it('should compose two functions from right to left', () => {
    return compose(sum, mapPlusOne)([1,2,3]).should.be.equal(9);
  });

  it('should compose three functions from right to left', () => {
    return compose(sum, mapPlusOne, mapMinusOne)([1,2,3]).should.be.equal(6);
  });
});