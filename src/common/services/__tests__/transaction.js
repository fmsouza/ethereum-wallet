import { Wallet as WalletUtils, Transaction as TransactionUtils } from '@common/utils';
import * as Transactions from '../transactions';

describe('TransactionsService', () => {

  it('`sendTransaction` should break if the wallet is invalid', async function() {
    const wallet = null;
    const txn = {};
    try {
      await Transactions.sendTransaction(wallet, txn);
      fail('should have thrown an Error.');
    } catch (e) {
      expect(e.message).toBe('Invalid wallet');
    }
  });

  it('`sendTransaction` should break if the transaction is invalid', async function() {
    const mnemonics = WalletUtils.generateMnemonics();
    const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
    try {
      await Transactions.sendTransaction(wallet, {});
      fail('should have thrown an Error.');
    } catch (e) { expect(e.message).toBe('Invalid transaction'); }

    try {
      await Transactions.sendTransaction(wallet, []);
      fail('should have thrown an Error.');
    } catch (e) { expect(e.message).toBe('Invalid transaction'); }

    try {
      await Transactions.sendTransaction(wallet, null);
      fail('should have thrown an Error.');
    } catch (e) { expect(e.message).toBe('Invalid transaction'); }
    
    try {
      await Transactions.sendTransaction(wallet, undefined);
      fail('should have thrown an Error.');
    } catch (e) { expect(e.message).toBe('Invalid transaction'); }
    
    try {
      await Transactions.sendTransaction(wallet, true);
      fail('should have thrown an Error.');
    } catch (e) { expect(e.message).toBe('Invalid transaction'); }
    
    try {
      await Transactions.sendTransaction(wallet, 'foo');
      fail('should have thrown an Error.');
    } catch (e) { expect(e.message).toBe('Invalid transaction'); }
    
    try {
      await Transactions.sendTransaction(wallet, 42);
      fail('should have thrown an Error.');
    } catch (e) { expect(e.message).toBe('Invalid transaction'); }
    
    try {
      await Transactions.sendTransaction(wallet, { value: 'foo', gasLimit: 'bar', to: null });
      fail('should have thrown an Error.');
    } catch (e) { expect(e.message).toBe('Invalid transaction'); }
  });

  it('`sendTransaction` should break if the the wallet has no funds to make the transaction', async function() {
    const mnemonics = WalletUtils.generateMnemonics();
    const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
    const txn = TransactionUtils.createTransaction(wallet.getAddress(), '5.0');
    try {
      await Transactions.sendTransaction(wallet, txn);
      fail('should have thrown an Error.');
    } catch (e) { expect(e.message).toBe('insufficient funds for gas * price + value'); }
  });
});