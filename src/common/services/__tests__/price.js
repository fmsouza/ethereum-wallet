import * as Price from '../price';

describe('PriceService', () => {

    it('should be able to get the price conversion between ETH, USD, and EUR', async function() {
        try {
            const result = await Price.getPrice();
            expect(result.status).toBe(200);
            expect(result.data.USD).toBeDefined();
            expect(result.data.USD).not.toBeNaN();
            expect(result.data.EUR).toBeDefined();
            expect(result.data.EUR).not.toBeNaN();
        } catch (e) {
            fail(e);
        }
    });
});