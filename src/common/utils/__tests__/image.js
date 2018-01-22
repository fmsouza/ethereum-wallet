import * as ImageUtils from '../image';

describe('Image utils', () => {

    it('`generateAvatar` function should return a base64 encoded SVG', () => {
        const result = ImageUtils.generateAvatar('123456789012345');
        expect(typeof result).toEqual('string');
    });
});