import chai from 'chai';
import isEmail from '../../src/validation/isEmail';
const should = chai.should();

describe('is-email', () => {
  it('the component should exist', () => {
    return should.exist(isEmail);
  });

  it('return false upon unvalid email', () => {
    const invalidEmail = 'lalala';
    chai.expect(isEmail(invalidEmail)).to.be.equal(false);
  });

  it('return true upon valid email', () => {
    const validEmail = 'lalala@la.la';
    chai.expect(isEmail(validEmail)).to.be.equal(true);
  });
});