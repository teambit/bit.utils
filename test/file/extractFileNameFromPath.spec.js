import {expect} from 'chai';
import extractFileNameFromPath from '../../src/file/extractFileNameFromPath';

describe('extractFileNameFromPath', () => {
    it('should extract file name from full path', () => {
        const path = 'src/temp/name.js';
        const filename = extractFileNameFromPath(path);
        return expect(filename).to.eql('name');
    });

    it('should extract file name from partial path', () => {
        const path = 'name.js';
        const filename = extractFileNameFromPath(path);
        return expect(filename).to.eql('name');
    });
});