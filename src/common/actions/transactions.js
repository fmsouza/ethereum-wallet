import { wallet as WalletStore } from '@common/stores';
import { Transactions as TransactionsService } from '@common/services';
import { Transaction as TransactionUtils } from '@common/utils';

export function sendEther(wallet, destination, amount) {
  return TransactionsService.sendEther(wallet, destination, amount);
}

export function sendTransaction(wallet, destination, amount) {
  const txn = TransactionUtils.createTransaction(destination, amount);
  return TransactionsService.sendTransaction(wallet, txn);
}