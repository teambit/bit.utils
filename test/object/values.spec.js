import { expect } from 'chai';
import values from '../../src/object/values';

const mock = { 
  a: 'foo',
  b: 'bar'
};

describe('#values()', () => {
  it('should return values `foo` from object', () => {
    expect(values(mock)).to.deep.equal(['foo', 'bar']);
  });
});