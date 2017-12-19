import { WalletStore } from '../wallet';
import { Wallet as WalletUtils } from '@common/utils';

describe('WalletStore', () => {

    let walletStore;

    beforeEach(() => walletStore = new WalletStore());

    it('should be able to change the loading state', () => {
        walletStore.isLoading(true);
        expect(walletStore.loading).toBe(true);
    });

    it('should be able to add the currently active wallet', () => {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        walletStore.select(wallet);
        expect(walletStore.item.getAddress()).toBe(wallet.getAddress());
    });
    
    it('should be able to reset the store state', () => {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        walletStore.select(wallet);
        walletStore.isLoading(true);
        walletStore.reset();
        expect(walletStore.item).toBe(null);
        expect(walletStore.loading).toBeFalsy();
    });
});