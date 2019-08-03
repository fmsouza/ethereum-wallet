import { ethers } from 'ethers';
import { Transaction as TransactionUtils } from '@common/utils';

const { Wallet } = ethers;

export function sendTransaction(wallet, transaction) {
    if (!(wallet instanceof Wallet)) throw new Error('Invalid wallet');
    if (!TransactionUtils.isValidTransaction(transaction)) throw new Error('Invalid transaction');
    return wallet.sendTransaction(transaction);
}