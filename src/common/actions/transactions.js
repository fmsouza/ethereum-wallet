import ethers from 'ethers';
import Snackbar from 'react-native-snackbar';
import { wallet as WalletStore } from '@common/stores';
import { Transactions as TransactionsService } from '@common/services';
import { colors } from '@common/styles';

async function waitForTransaction(wallet, txn) {
  txn = await wallet.provider.waitForTransaction(txn.hash);
  WalletStore.moveToHistory(txn);
  Snackbar.show({ title: 'Transaction confirmed', duration: Snackbar.LENGTH_SHORT });
}

export async function sendEther(wallet, destination, amount, options) {
  txn = await TransactionsService.sendEther(wallet, destination, amount, options);
  WalletStore.addPendingTransaction(txn);
  waitForTransaction(wallet, txn);
  return txn;
}

export async function sendTransaction(wallet, txn) {
  if (!(wallet instanceof ethers.Wallet)) throw new Error('Invalid wallet');
  txn = await TransactionsService.sendTransaction(wallet, txn);
  WalletStore.addPendingTransaction(txn);
  waitForTransaction(wallet, txn);
  return txn;
}