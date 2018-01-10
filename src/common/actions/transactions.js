import { wallet as WalletStore } from '@common/stores';
import { Transactions as TransactionsService } from '@common/services';

export function sendEther(wallet, destination, amount) {
  return TransactionsService.sendEther(wallet, destination, amount);
}