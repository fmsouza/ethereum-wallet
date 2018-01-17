import { Wallet as WalletUtils, Transaction as TransactionUtils } from '@common/utils';
import * as Transactions from '../transactions';
import ethers from 'ethers';

describe('TransactionsActions', () => {

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

  it('`sendTransaction` should break if the the wallet, destination address or the value are invalid', async function() {
    const mnemonics = WalletUtils.generateMnemonics();
    const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
    try {
      await Transactions.sendTransaction(null, '0x12345', '5.0');
      fail('should have thrown an Error.');
    } catch (e) { expect(e.message).toBe('Invalid wallet'); }

    try {
      await Transactions.sendEther(wallet, null, '5.0');
      fail('should have thrown an Error.');
    } catch (e) { expect(e.message).toBe('Invalid destination address'); }
  });

  it('`sendTransaction` should send ether to some address when there are funds available', async function() {
    const pk = '62384683889eae6de8440eb735856f31bb4f17815888f847c8567b3c87f00be8';
    const wallet = WalletUtils.loadWalletFromPrivateKey(pk);
    const to = '0x407428BF09ea7Dac2824A64AfE88171041a02b14';
    const value = '0.002';
    try {
      const txn = await Transactions.sendTransaction(wallet, to, value);
      expect(txn.from).toBe(wallet.getAddress());
      expect(txn.to).toBe(to);
      expect(txn.value.toString()).toBe(ethers.utils.parseEther(value).toString());
    } catch (e) { fail(e); }
  });
});