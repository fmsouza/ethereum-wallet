import { PricesStore } from '../prices';

describe('PricesStore', () => {
    
        let pricesStore;
    
        beforeEach(() => pricesStore = new PricesStore());
    
        it('should be able to change the loading state', () => {
            pricesStore.isLoading(true);
            expect(pricesStore.loading).toBe(true);
        });

        it('should be able to change the usd price', () => {
            pricesStore.setUSDRate(350);
            expect(pricesStore.usd).toBe(350);
            expect(pricesStore.eur).toBe(0);
            expect(pricesStore.brl).toBe(0);
        });
        
        it('should be able to change the eur price', () => {
            pricesStore.setEURRate(300);
            expect(pricesStore.eur).toBe(300);
            expect(pricesStore.usd).toBe(0);
            expect(pricesStore.brl).toBe(0);
        });
        
        it('should be able to change the brl price', () => {
            pricesStore.setBRLRate(300);
            expect(pricesStore.brl).toBe(300);
            expect(pricesStore.usd).toBe(0);
            expect(pricesStore.eur).toBe(0);
        });
        
        it('should fail to change the USD price if a NaN is given', () => {
            try {
                pricesStore.setUSDRate("whatever");
                fail('Should have thrown an error');
            } catch(e) { expect(e.message).toBe('The input is NaN') }
            try {
                pricesStore.setUSDRate(true);
                fail('Should have thrown an error');
            } catch(e) { expect(e.message).toBe('The input is NaN') }
            try {
                pricesStore.setUSDRate(false);
                fail('Should have thrown an error');
            } catch(e) { expect(e.message).toBe('The input is NaN') }
            try {
                pricesStore.setUSDRate({});
                fail('Should have thrown an error');
            } catch(e) { expect(e.message).toBe('The input is NaN') }
            try {
                pricesStore.setUSDRate([]);
                fail('Should have thrown an error');
            } catch(e) { expect(e.message).toBe('The input is NaN') }
            expect(pricesStore.usd).toBe(0);
        });
        
        it('should fail to change the EUR price if a NaN is given', () => {
            try {
                pricesStore.setEURRate("whatever");
                fail('Should have thrown an error');
            } catch(e) { expect(e.message).toBe('The input is NaN') }
            try {
                pricesStore.setEURRate(true);
                fail('Should have thrown an error');
            } catch(e) { expect(e.message).toBe('The input is NaN') }
            try {
                pricesStore.setEURRate(false);
                fail('Should have thrown an error');
            } catch(e) { expect(e.message).toBe('The input is NaN') }
            try {
                pricesStore.setEURRate({});
                fail('Should have thrown an error');
            } catch(e) { expect(e.message).toBe('The input is NaN') }
            try {
                pricesStore.setEURRate([]);
                fail('Should have thrown an error');
            } catch(e) { expect(e.message).toBe('The input is NaN') }
            expect(pricesStore.eur).toBe(0);
        });
        
        it('should fail to change the BRL price if a NaN is given', () => {
            try {
                pricesStore.setBRLRate("whatever");
                fail('Should have thrown an error');
            } catch(e) { expect(e.message).toBe('The input is NaN') }
            try {
                pricesStore.setBRLRate(true);
                fail('Should have thrown an error');
            } catch(e) { expect(e.message).toBe('The input is NaN') }
            try {
                pricesStore.setBRLRate(false);
                fail('Should have thrown an error');
            } catch(e) { expect(e.message).toBe('The input is NaN') }
            try {
                pricesStore.setBRLRate({});
                fail('Should have thrown an error');
            } catch(e) { expect(e.message).toBe('The input is NaN') }
            try {
                pricesStore.setBRLRate([]);
                fail('Should have thrown an error');
            } catch(e) { expect(e.message).toBe('The input is NaN') }
            expect(pricesStore.brl).toBe(0);
        });
        
        it('should be able to reset the store state', () => {
            pricesStore.isLoading(true);
            pricesStore.setUSDRate(350);
            pricesStore.setEURRate(300);
            pricesStore.setBRLRate(250);
            pricesStore.reset();
            expect(pricesStore.usd).toBe(0);
            expect(pricesStore.eur).toBe(0);
            expect(pricesStore.brl).toBe(0);
            expect(pricesStore.loading).toBe(false);
        });

        it('should default the selected rate to USD', () => {
            expect(pricesStore.selectedRate).toBe('usd');
        });

        it('`selectedRateValue` should get the rate for the currently active rate', () => {
            const usdRate = 350, eurRate = 300;
            pricesStore.setUSDRate(usdRate);
            pricesStore.setEURRate(eurRate);
            expect(pricesStore.selectedRate).toBe('usd');
            expect(pricesStore.selectedRateValue).toBe(usdRate);
        });

        it('should be able to change the active rate', () => {
            const usdRate = 350, eurRate = 300;
            pricesStore.setUSDRate(usdRate);
            pricesStore.setEURRate(eurRate);
            expect(pricesStore.selectedRate).toBe('usd');
            pricesStore.setSelectedRate('eur');
            expect(pricesStore.selectedRate).toBe('eur');
            expect(pricesStore.selectedRateValue).toBe(eurRate);
        });

        it('should fail to change the active rate if the given rate is invalid', () => {
            try {
                pricesStore.setSelectedRate('invalid');
                fail('Did not failed.');
            } catch (e) { expect(e.message).toBe('The rate is not valid.'); }
        });

        it('should fallback to default rate if null is given', () => {
            pricesStore.setSelectedRate(null);
            expect(pricesStore.selectedRate).toBe('usd');
        });

        it('should fallback to default rate if undefined is given', () => {
            pricesStore.setSelectedRate(undefined);
            expect(pricesStore.selectedRate).toBe('usd');
        });

        it('should fallback to default rate if empty string is given', () => {
            pricesStore.setSelectedRate('');
            expect(pricesStore.selectedRate).toBe('usd');
        });
});