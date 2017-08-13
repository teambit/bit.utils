import { expect } from 'chai';
import clamp from '../../src/number/clamp';

describe('number/clamp', () => {
  it('should return the max number (10)', () => {
    expect(clamp(50, 5, 10)).to.equal(10);
  });

  it('should return the min number (5)', () => {
    expect(clamp(2, 5, 10)).to.equal(5);
  });

  it('should return the passed number as its within range', () => {
    expect(clamp(10, 5, 30)).to.equal(10);
  });
});