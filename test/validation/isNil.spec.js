import { expect } from 'chai';

import isNil from '../../src/validation/isNil';

describe('#isNil()', () => {
  it('should return true if null is passed', () => {
    expect(isNil(null)).to.equal(true);
  });

  it('should return true if undefined is passed', () => {
    expect(isNil()).to.equal(true);
  });

  it('should return false as an empty string was passed', () => {
    expect(isNil('')).to.equal(false);
  });

  it('should return false as an empty object was passed', () => {
    expect(isNil({})).to.equal(false);
  });

  it('should return false as a number was passed', () => {
    expect(isNil({})).to.equal(false);
  });  
});