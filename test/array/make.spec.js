import { expect } from 'chai';
import mockery from 'mockery';

const isNilMock = (val) => val === null || val === undefined;

mockery.registerMock('../validation/isNil', isNilMock);

import makeArray from '../../src/array/make';


describe('#makeArray()', () => {
  it('should wrap an empty string with an array', () => {
    expect(makeArray('')).to.deep.equal([''])
  });

  it('should return an empty array as nil value was passed', () => {
    expect(makeArray()).to.deep.equal([]);
  });

  it('should return the same array reference if an existing array was passed', () => {
    expect(makeArray([1])).to.deep.equal([1]);
  });
});