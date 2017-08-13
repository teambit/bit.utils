import chai from 'chai';
import evolve from '../../src/object/evolve';
const should = chai.should();

describe('evolve', () => {
  const add = a => b => a + b;
  const trim = str => str.trim();

  it('the evolve function should exist', () => {
    return should.exist(evolve);
  });

  it('should Creates a new object by recursively evolving a shallow copy of object, according to the transformation functions.', ()=> {
    var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
    var transformations = {
      firstName: trim,
      lastName: trim, // Will not get invoked.
      data: {elapsed: add(1), remaining: add(-1)}
    };
    evolve(transformations, tomato).should.be.deep.equal({firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123});
  });
});