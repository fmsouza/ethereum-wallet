import * as Action from '../prices';
import { prices as PricesStore } from '@common/stores';

describe('PriceActions', () => {

    describe('.getPrice', () => {

        it('should add the prices to the store', async () => {
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

    describe('.selectActiveRate', () => {

        it('should change the currently active rate', () => {
            const eurRate = 100;
            PricesStore.setEURRate(eurRate);
            Action.selectActiveRate('eur');
            expect(PricesStore.selectedRate).toBe('eur');
            expect(PricesStore.selectedRateValue).toBe(eurRate);
        });
    });
});