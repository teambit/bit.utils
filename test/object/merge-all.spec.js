import chai from 'chai';
import mergeAll from '../../src/object/merge-all';
import mockery from 'mockery';
const should = chai.should();

describe('merge-all', () => {
  const objectsArr = [{ a: 1 }, { b: 2}, { c: 3 }];
  const mergedObject = { a: 1, b: 2, c: 3 };
  mockery.registerMock('./merge', (...args) => Object.assign({}, ...args));

  it('the mergeAll fucntion should exist', () => {
    return should.exist(mergeAll);
  });

  it('should merge all objects in an array', () => {
    return mergeAll(objectsArr).should.be.deep.equal(mergedObject);
  });
});
