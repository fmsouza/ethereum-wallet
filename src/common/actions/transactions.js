import { wallet as WalletStore } from '@common/stores';
import { Transactions as TransactionsService } from '@common/services';
import { Transaction as TransactionUtils } from '@common/utils';

export async function sendEther(wallet, destination, amount) {
  WalletStore.isLoading(true);
  txn = await TransactionsService.sendEther(wallet, destination, amount);
  WalletStore.isLoading(false);
  WalletStore.addPendingTransaction(txn);
  txn = await wallet.provider.waitForTransaction(txn.hash);
  WalletStore.moveToHistory(txn);
  return txn;
}

export async function sendTransaction(wallet, destination, amount) {
  let txn = TransactionUtils.createTransaction(destination, amount);
  WalletStore.isLoading(true);
  txn = await TransactionsService.sendTransaction(wallet, txn);
  WalletStore.isLoading(false);
  WalletStore.addPendingTransaction(txn);
  txn = await wallet.provider.waitForTransaction(txn.hash);
  WalletStore.moveToHistory(txn);
  return txn;
}