import chai from 'chai';
import merge from '../../src/object/merge';
const should = chai.should();

describe('merge', () => {
  const o1 = { a: 1 };
  const o2 = { b: 2 };
  const o3 = { c: 3};
  const o4 = { a: 1, b: 1, c: 1 };
  const o5 = { b: 2, c: 2 };
  const o6 = { c: 3 };

  it('the merge fucntion should exist', () => {
    return should.exist(merge);
  });

  it('should merge two objects into one', () =>{
    merge(o1, o2).should.be.deep.equal({ a: 1, b:2 });
  });

  it('should merge three objects into one', () =>{
    merge(o1, o2, o3).should.be.deep.equal({ a: 1, b: 2, c: 3 });
  });

  it('should not mutate the original objects', () =>{
    merge(o1, o2, o3);
    o1.should.be.deep.equal({ a: 1 });
  });

  it('return empty object if an empty object insterted', () =>{
    merge({}).should.be.deep.equal({});
  });

  it('return empty object if no arguments inserted', () =>{
    merge().should.be.deep.equal({});
  });
});