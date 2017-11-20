import { wallets as WalletsStore } from 'common/stores';

export async function addWallet(walletName, wallet) {
    WalletsStore.addWallet(walletName, wallet);
}