import { wallets as WalletsStore } from 'common/stores';
import { Wallets as WalletsService } from 'common/services';
import { Wallet as WalletUtils } from 'common/utils';

export async function addWallet(walletName, wallet) {
    WalletsStore.isLoading(true);
    WalletsStore.addWallet(walletName, wallet);
    WalletsStore.isLoading(false);
}

export async function loadWallets() {
    WalletsStore.isLoading(true);
    const pks = await WalletsService.loadWalletPKs();
    pks.map(({ name, privateKey }) => {
        const wallet = WalletUtils.loadWalletFromPrivateKey(privateKey);
        WalletsStore.addWallet(name, wallet);
    });
    WalletsStore.isLoading(false);
}

export async function saveWallets() {
    await WalletsService.saveWalletPKs(WalletsStore.list);
}