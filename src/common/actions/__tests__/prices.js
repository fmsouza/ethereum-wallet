import * as Action from '../prices';
import { prices as PricesStore } from '@common/stores';
import { Prices as PricesService } from '@common/services';

jest.mock('@common/services/prices');

describe('PriceActions', () => {
    
    beforeEach(() => PricesStore.reset());

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

        beforeEach(() => PricesService.saveActiveRate.mockReset());

        it('should change the currently active rate', async () => {
            PricesService.saveActiveRate.mockResolvedValue(null);
            const eurRate = 100, activeRate = 'eur';
            PricesStore.setEURRate(eurRate);
            await Action.selectActiveRate(activeRate);
            expect(PricesStore.selectedRate).toBe(activeRate);
            expect(PricesStore.selectedRateValue).toBe(eurRate);
            expect(PricesService.saveActiveRate).toHaveBeenCalledWith(activeRate);
        });
    });

    describe('.loadActiveRate', () => {

        beforeEach(() => PricesService.loadActiveRate.mockReset());

        it('should update the active rate with the stored in the memory', async () => {
            PricesService.loadActiveRate.mockResolvedValue('eur');
            try {
                expect(PricesStore.selectedRate).toBe('usd');
                await Action.loadActiveRate();
                expect(PricesStore.selectedRate).toBe('eur');
            } catch (e) {
                fail(e);
            }
        });
    });
});