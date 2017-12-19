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
});