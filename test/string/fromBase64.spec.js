import chai from 'chai';
import fromBase64 from '../../src/string/fromBase64';
const should = chai.should();

describe('from-base64', () => {
  const testString = 'test from-base64 function';
  const testBase64String = 'dGVzdCBmcm9tLWJhc2U2NCBmdW5jdGlvbg==';
  const bufferTestBase64String = new Buffer(testBase64String);

  it('the fromBase64 function should exist', () => {
    return should.exist(fromBase64);
  });

  it('should decode a base64 string', () => {
    return fromBase64(testBase64String).should.be.equal(testString);
  });
});