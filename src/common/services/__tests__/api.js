import * as Api from '../api';

describe('ApiService', () => {

    it('should be able to get the price conversion between ETH, USD, BRL, and EUR', async function() {
        try {
            const response = await Api.getPrice();
            expect(response.status).toBe(200);
            expect(response.data.USD).toBeDefined();
            expect(response.data.USD).not.toBeNaN();
            expect(response.data.EUR).toBeDefined();
            expect(response.data.EUR).not.toBeNaN();
            expect(response.data.BRL).toBeDefined();
            expect(response.data.BRL).not.toBeNaN();
        } catch (e) {
            fail(e);
        }
    });

    it('should be able to get the transaction history for an existing wallet address', async function() {
        try {
            const walletAddress = '0x589d41feE71B6c972F7AB20e1Fa6EeC11e6C3dF6';
            const response = await Api.getHistory(walletAddress);
            expect(response.status).toBe(200);
            expect(response.data.status).toBe('1');
            expect(response.data.result).toBeInstanceOf(Array);
            expect(response.data.result.length).toBeGreaterThan(0);
        } catch (e) {
            fail(e);
        }
    });

    it('should be able to get an empty transaction history for an unexisting wallet address', async function() {
        try {
            const walletAddress = 'notavalidaddress';
            const response = await Api.getHistory(walletAddress);
            expect(response.status).toBe(200);
            expect(response.data.status).toBe('0');
            expect(response.data.result).toBe('Error! Invalid address format');
        } catch (e) {
            fail(e);
        }
    });
});