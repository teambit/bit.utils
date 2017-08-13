import chai from 'chai';
import toKubeformat from '../../src/kubernetes/toKubeformat';
const should = chai.should();

describe('parsebitidToJob', () => {
  it('the component should equal amit.myscope.global.is-same.5', () => {

    return toKubeformat("amit.myscope/global/is-same@5").should.equal("amit.myscope.global.is-same.5");//should.exist(component);
  });
});