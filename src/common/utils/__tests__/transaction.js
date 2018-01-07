import ethers from 'ethers';
import * as TransactionUtils from '../transaction';

describe('Transaction utils', () => {

    it('`createTransaction` should return a valid transaction when the inputs are correct', () => {
        const to = '0x123456';
        const value = '1.0';
        const txn = TransactionUtils.createTransaction(to, value);
        expect(txn.to).toBe(to);
        expect(txn.value.toString()).toBe(ethers.utils.parseEther(value).toString());
        expect(txn.gasLimit).toBe(21000);
    });

    it('`createTransaction` should raise an error if receive an invalid value', () => {
        const to = '0x123456';
        try {
            TransactionUtils.createTransaction(to, 'invalid');
            fail('Should have thrown an error.');
        } catch (e) { expect(e.message).toBe('The transaction value is invalid.'); }
        try {
            TransactionUtils.createTransaction(to, {});
            fail('Should have thrown an error.');
        } catch (e) { expect(e.message).toBe('The transaction value is invalid.'); }
        try {
            TransactionUtils.createTransaction(to, []);
            fail('Should have thrown an error.');
        } catch (e) { expect(e.message).toBe('The transaction value is invalid.'); }
        try {
            TransactionUtils.createTransaction(to, null);
            fail('Should have thrown an error.');
        } catch (e) { expect(e.message).toBe('The transaction value is required.'); }
        try {
            TransactionUtils.createTransaction(to);
            fail('Should have thrown an error.');
        } catch (e) { expect(e.message).toBe('The transaction value is required.'); }
    });

    it('`createTransaction` should return a valid transaction with additional data', () => {
        const to = '0x123456';
        const value = '1.0';
        const txn = TransactionUtils.createTransaction(to, value, 50000);
        expect(txn.to).toBe(to);
        expect(txn.value.toString()).toBe(ethers.utils.parseEther(value).toString());
        expect(txn.gasLimit).toBe(50000);
    });
});