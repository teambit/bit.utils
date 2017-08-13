import chai from 'chai';
import parseUrl from '../../src/ssh/parseUrl';
const should = chai.should();

describe('${name}', () => {
  it('the parseUrl function should exist', () => {
    return should.exist(parseUrl);
  });

  const mockUrl = 'ssh://user@123.456.678.909:/path/in/scope';
  const parsedMock = {
    host: '123.456.678.909',
    path: '/path/in/scope',
    port: 22,
    username: 'user'
  };

  it(`parseUrl should get a url - "${mockUrl}" and return the parsed version of it`, () => {
    return parseUrl(mockUrl).should.deep.equal(parsedMock);
  });

});