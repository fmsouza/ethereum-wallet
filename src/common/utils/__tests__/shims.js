import '../shims';

describe('Shims', () => {

    it('should add the method `slice` to `Uint8Array` prototype', () => {
        expect(Uint8Array.prototype.slice).toBeInstanceOf(Function);
    });
    
    it('should add the method `equals` to `Array` prototype', () => {
        expect(Array.prototype.equals).toBeInstanceOf(Function);
    });
});