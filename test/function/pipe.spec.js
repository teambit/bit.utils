import chai from 'chai';
import pipe from '../../src/function/pipe';
const should = chai.should();

describe('pipe', () => {
  it('the component should exist', () => {
    return should.exist(pipe);
  });
});

