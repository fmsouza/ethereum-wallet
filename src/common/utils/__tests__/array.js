import * as ArrayUtils from '../array';

describe('Array utils', () => {

    it('`shuffleArray` function should return a different array when the input is an array', () => {
        const current = [1, 2, 3, 4, 5];
        const result = ArrayUtils.shuffleArray(current);
        expect(JSON.stringify(result)).not.toEqual(JSON.stringify(current));
    });

    it('`shuffleArray` function should raise an Error when the input is not an array', () => {
        
        try { ArrayUtils.shuffleArray("some string"); }
        catch (e) { expect(e.message).toEqual('The input is not an array.'); }
        
        try { ArrayUtils.shuffleArray({}); }
        catch (e) { expect(e.message).toEqual('The input is not an array.'); }

        try { ArrayUtils.shuffleArray(0); }
        catch (e) { expect(e.message).toEqual('The input is not an array.'); }

        try { ArrayUtils.shuffleArray(true); }
        catch (e) { expect(e.message).toEqual('The input is not an array.'); }

        try { ArrayUtils.shuffleArray(false); }
        catch (e) { expect(e.message).toEqual('The input is not an array.'); }
    });
});