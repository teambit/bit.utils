import { expect } from 'chai';
import toBase64 from '../../src/string/toBase64';

describe('#toBase64()', () => {
  it('should return a base64 encoded string for string `foo bar`', () => {
    expect(toBase64('foo bar')).to.equal('Zm9vIGJhcg==');
  });

  it('should return a base64 encoded string for buffer `foo bar`', () => {
    expect(toBase64(new Buffer('foo bar'))).to.equal('Zm9vIGJhcg==');
  });

  it('should not mutate given reference', () => {
    const str = 'foo bar';
    toBase64(str);
    expect(str).to.equal('foo bar');
  });
});