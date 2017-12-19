import * as Action from '../prices';
import { prices as PricesStore } from '@common/stores';

describe('PriceActions', () => {

    it('should add the prices to the store', async function() {
        try {
            await Action.getPrice();
            expect(PricesStore.usd).toBeGreaterThan(0);
            expect(PricesStore.eur).toBeGreaterThan(0);
            expect(PricesStore.brl).toBeGreaterThan(0);
        } catch (e) {
            fail(e);
        }
    });
});