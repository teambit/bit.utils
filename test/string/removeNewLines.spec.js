import chai from 'chai';
import removeNewLines from '../../src/string/removeNewLines';
const should = chai.should();

describe('remove-new-lines', () => {
  it('the component should exist', () => {
    return should.exist(removeNewLines);
  });

  const mockStr = '\nthis is \n\ntest \n\n';
  const mockResults = 'this is test ';

  it('should remove all new lines from a string', () => {
    return removeNewLines(mockStr).should.equal(mockResults);
  });
});