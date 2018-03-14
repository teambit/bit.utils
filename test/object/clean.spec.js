import { expect } from 'chai';
import clean from '../../src/object/clean';
import mockery from 'mockery';

function forEach(obj, cb) {
  const keys = Object.keys(obj);
  keys.forEach(key => cb(obj[key], key));
}

mockery.registerMock('./forEach', forEach);

describe('#clean()', () => {
  it('should clean property `foo` as its value is falsy', () => {
    expect(clean({ foo: null, bar: 'foo' })).to.deep.equal({ bar: 'foo' });
  });

  it('should return an empty object as all properties are falsy', () => {
    expect(clean({ foo: null, bar: false })).to.deep.equal({});
  });

  it('should throw a type error in case a non-object value was passed', () => {
    expect(() => clean(null)).to.throw();
  });
});
