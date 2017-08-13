import { expect } from 'chai';

import forEach from '../../src/object/forEach';

describe('#forEach()', () => {
  const mock = {
    a: 1,
    b: 2,
    c: 3
  };

  const mockArray = ['a', 'b', 'c', 'd'];

  it('should invoke `cb` for every key within given object', () => {
    const targetKeys = Object.keys(mock);
    const invokedKeys = [];

    forEach(mock, (val, key) => {
      invokedKeys.push(key);
    });

    expect(targetKeys).to.deep.equal(targetKeys);
  });

  it('should invoke `cb` for every key within given array', () => {
    const arrKeys = Object.keys(mockArray);
    const invokedKeys = [];

    forEach(mockArray, (val, key) => {
      invokedKeys.push(key);
    });

    expect(arrKeys).to.deep.equal(invokedKeys);    
  });
});