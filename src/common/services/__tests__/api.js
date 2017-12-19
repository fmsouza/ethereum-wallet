import * as Api from '../api';

describe('ApiService', () => {

    it('should be able to get the price conversion between ETH, USD, BRL, and EUR', async function() {
        try {
            const result = await Api.getPrice();
            expect(result.status).toBe(200);
            expect(result.data.USD).toBeDefined();
            expect(result.data.USD).not.toBeNaN();
            expect(result.data.EUR).toBeDefined();
            expect(result.data.EUR).not.toBeNaN();
            expect(result.data.BRL).toBeDefined();
            expect(result.data.BRL).not.toBeNaN();
        } catch (e) {
            fail(e);
        }
    });
});