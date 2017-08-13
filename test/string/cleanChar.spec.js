import { expect } from 'chai';
import cleanChar from '../../src/string/cleanChar';

describe('#cleanChar()', () => {
  it('should clean first char `h` from string `hello`', () => {
    expect(cleanChar('hello', 'h')).to.equal('ello');
  });

  it('should return string `foo` without any change as char `z` is not contained', () => {
    expect(cleanChar('foo')).to.equal('foo');
  });

  it('should never mutate given string reference', () => {
    const str = 'foo';
    cleanChar('foo', 'o');
    expect(str).to.equal('foo');
  });
});