import { Wallet as WalletUtils, Transaction as TransactionUtils } from '@common/utils';
import * as Transactions from '../transactions';
import ethers from 'ethers';

describe.skip('TransactionsService', () => {

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

  it('`sendTransaction` should send ether to some address when there are funds available', async function() {
    const pk = '62384683889eae6de8440eb735856f31bb4f17815888f847c8567b3c87f00be8';
    const wallet = WalletUtils.loadWalletFromPrivateKey(pk);
    const to = '0x407428BF09ea7Dac2824A64AfE88171041a02b14';
    const value = '0.002';
    const transaction = TransactionUtils.createTransaction(to, value);
    try {
      const txn = await Transactions.sendTransaction(wallet, transaction);
      expect(txn.from).toBe(wallet.getAddress());
      expect(txn.to).toBe(to);
      expect(txn.value.toString()).toBe(ethers.utils.parseEther(value).toString());
    } catch (e) { fail(e); }
  });

  it('`sendEther` should break if the the destination address or the value are invalid', async function() {
    const mnemonics = WalletUtils.generateMnemonics();
    const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
    try {
      await Transactions.sendEther(null, '0x12345', '5.0');
      fail('should have thrown an Error.');
    } catch (e) { expect(e.message).toBe('Invalid wallet'); }

    try {
      await Transactions.sendEther(wallet, null, '5.0');
      fail('should have thrown an Error.');
    } catch (e) { expect(e.message).toBe('Invalid destination address'); }
  });

  it('`sendEther` should send ether to some address when there are funds available', async function() {
    const pk = '62384683889eae6de8440eb735856f31bb4f17815888f847c8567b3c87f00be8';
    const wallet = WalletUtils.loadWalletFromPrivateKey(pk);
    const to = '0x407428BF09ea7Dac2824A64AfE88171041a02b14';
    const value = '0.002';
    try {
      const txn = await Transactions.sendEther(wallet, to, value);
      expect(txn.from).toBe(wallet.getAddress());
      expect(txn.to).toBe(to);
      expect(txn.value.toString()).toBe(ethers.utils.parseEther(value).toString());
    } catch (e) { fail(e); }
  });
});