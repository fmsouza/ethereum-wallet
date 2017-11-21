import { wallet as WalletStore, wallets as WalletsStore } from 'common/stores';
import { Wallets as WalletsService } from 'common/services';
import { Wallet as WalletUtils } from 'common/utils';

export async function addWallet(walletName, wallet, walletDescription = '') {
    WalletsStore.isLoading(true);
    WalletsStore.addWallet(walletName, wallet, walletDescription);
    WalletsStore.isLoading(false);
}

export async function loadWallets() {
    WalletsStore.isLoading(true);
    const pks = await WalletsService.loadWalletPKs();
    pks.map(({ description, name, privateKey }) => {
        const wallet = WalletUtils.loadWalletFromPrivateKey(privateKey);
        WalletsStore.addWallet(name, wallet, description);
    });
    WalletsStore.isLoading(false);
}

export async function updateBalance(wallet) {
    const balance = await wallet.getBalance();
    WalletsStore.setBalance(wallet.getAddress(), balance);
}

export async function saveWallets() {
    await WalletsService.saveWalletPKs(WalletsStore.list);
}

export function selectWallet(wallet) {
    WalletStore.select(wallet);
}