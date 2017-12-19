import { WalletsStore } from '../wallets';
import { Wallet as WalletUtils } from '@common/utils';

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
        walletsStore.addWallet("walletName", wallet, "description");
        expect(walletsStore.list.length).toBe(1);
        expect(walletsStore.list[0].name).toBe("walletName");
        expect(walletsStore.list[0].description).toBe('description');
        expect(walletsStore.list[0].getAddress()).toBe(wallet.getAddress());
    });
    
    it('should be able to modify a wallet balance in the list', () => {
        const mnemonics1 = WalletUtils.generateMnemonics();
        const wallet1 = WalletUtils.loadWalletFromMnemonics(mnemonics1);
        const mnemonics2 = WalletUtils.generateMnemonics();
        const wallet2 = WalletUtils.loadWalletFromMnemonics(mnemonics2);
        walletsStore.addWallet("walletName1", wallet1);
        walletsStore.addWallet("walletName2", wallet2);
        expect(walletsStore.list.length).toBe(2);
        expect(walletsStore.list[1].getAddress()).toBe(wallet2.getAddress());
        walletsStore.setBalance(wallet2.getAddress(), 1000);
        expect(walletsStore.list[1].balance).toBe(1000);
    });
    
    it('should be able to remove a wallet instance from the store list', () => {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        walletsStore.addWallet("walletName", wallet);
        expect(walletsStore.list.length).toBe(1);
        walletsStore.removeWallet(wallet);
        expect(walletsStore.list.length).toBe(0);
    });
    
    it('should be able to reset the store state', () => {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        expect(walletsStore.list.length).toBe(0);
        walletsStore.addWallet("walletName", wallet);
        walletsStore.isLoading(true);
        walletsStore.reset();
        expect(walletsStore.list.length).toBe(0);
        expect(walletsStore.loading).toBeFalsy();
    });
});