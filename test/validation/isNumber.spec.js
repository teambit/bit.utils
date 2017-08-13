import { expect } from 'chai';
import isNumber from '../../src/validation/isNumber';

describe('is-number', () => {
  it('should return false in case `string` was given', () => {
    expect(isNumber('string')).to.equal(false);
  });
});