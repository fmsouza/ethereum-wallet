import { WalletsStore } from '../wallets';
import { WalletUtils } from 'common/utils';

describe('WalletsStore', () => {

    let walletsStore;

    beforeEach(() => walletsStore = new WalletsStore());

    it('should be able to change the loading state', () => {
        walletsStore.isLoading(true);
        expect(walletsStore.loading).toBe(true);
    });
    
    it('should be able to add a wallet instance to the store list', () => {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        expect(walletsStore.list.length).toBe(0);
        walletsStore.addWallet(wallet);
        expect(walletsStore.list.length).toBe(1);
        expect(walletsStore.list[0].getAddress()).toBe(wallet.getAddress());
    });
    
    it('should be able to remove a wallet instance from the store list', () => {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        walletsStore.addWallet(wallet);
        expect(walletsStore.list.length).toBe(1);
        walletsStore.removeWallet(wallet);
        expect(walletsStore.list.length).toBe(0);
    });
    
    it('should be able to reset the store state', () => {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        expect(walletsStore.list.length).toBe(0);
        walletsStore.addWallet(wallet);
        walletsStore.isLoading(true);
        walletsStore.reset();
        expect(walletsStore.list.length).toBe(0);
        expect(walletsStore.loading).toBeFalsy();
    });
});