import chai from 'chai';
import mapObject from '../../src/object/map';
const should = chai.should();

describe('map', () => {
  it('the mapObject function should exist', () => {
    return should.exist(mapObject);
  });

  it('should map an object and return its value to a new object', () => {
   mapObject({ start: 5, end: 12 }, function(val, key) {
    return val + 5;
   }).should.be.deep.equal({ start: 10, end: 17 });
  });
});