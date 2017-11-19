import { wallets as WalletsStore } from 'common/stores';

export async function addWallet(wallet) {
    WalletsStore.addWallet(wallet);
}