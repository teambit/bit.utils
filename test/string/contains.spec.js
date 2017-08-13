import { expect } from 'chai';
import contains from '../../src/string/contains';

describe('contains', () => {
  it('should return true as substring `foo` exists in `foo bar`', () => {
    expect(contains('foo bar', 'foo')).to.equal(true);
  });

  it('should return false as substring `x` do not exists in string `foo`', () => {
    expect(contains('foo', 'x')).to.equal(false);
  });
});