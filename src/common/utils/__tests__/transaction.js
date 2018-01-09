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
        const txn = TransactionUtils.createTransaction(to, value, 50000, { nonce: 5 });
        expect(txn.to).toBe(to);
        expect(txn.value.toString()).toBe(ethers.utils.parseEther(value).toString());
        expect(txn.gasLimit).toBe(50000);
        expect(txn.nonce).toBe(5);
    });

    it('`isValidTransaction` should return false if transaction is not an object', () => {
        var txn, result;
        txn = 42;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn = null;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn = undefined;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn = 'foo';
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn = NaN;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();
    });

    it('`isValidTransaction` should return false if value is invalid', () => {
        var txn = { to: '0x12345', gasLimit: 21000 }, result;
        txn.value = 'foo';
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn.value = null;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn.value = undefined;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn.value = 'foo';
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn.value = NaN;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn.value = '5.003';
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeTruthy();

        txn.value = 4;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeTruthy();
    });

    it('`isValidTransaction` should return false if gasLimit is not a number', () => {
        var txn = { to: '0x12345', value: 5 }, result;
        txn.gasLimit = 'foo';
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn.gasLimit = null;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn.gasLimit = undefined;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn.gasLimit = 'foo';
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn.gasLimit = NaN;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn.gasLimit = '5.003';
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeTruthy();

        txn.gasLimit = 4;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeTruthy();
    });

    it('`isValidTransaction` should return false if `to` field is not string', () => {
        var txn = { to: '0x12345', gasLimit: 21000, value: 5 }, result;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeTruthy();

        txn.to = null;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn.to = undefined;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn.to = NaN;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();

        txn.to = 4;
        result = TransactionUtils.isValidTransaction(txn);
        expect(result).toBeFalsy();
    });
});