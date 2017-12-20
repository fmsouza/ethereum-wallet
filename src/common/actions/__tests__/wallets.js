import { wallet as WalletStore, wallets as WalletsStore } from '@common/stores';
import { Wallet as WalletUtils } from '@common/utils';
import * as Action from '../wallets';

describe('WalletsActions', () => {

    it('should add a wallet to the store', async function() {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        try {
            await Action.addWallet("walletName", wallet);
        } catch (e) {
            fail(e);
        } finally {
            WalletsStore.reset();
        }
    });
    
    it('should fail to add a wallet if not ethers.Wallet instance', async function() {
        const wallet = { privateKey: '54321', address: '123445' };
        try {
            await Action.addWallet("walletName", wallet);
            fail('Should have thrown an error.');
        }
        catch (e) {
            expect(e.message).toEqual('Invalid Wallet');
        } finally {
            WalletsStore.reset();
        }
    });

    it('should be able to update a wallet balance', async function() {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        try {
            await Action.addWallet("walletName", wallet);
            await Action.updateBalance(wallet);
            expect(WalletsStore.list[0].getAddress()).toBe(wallet.getAddress());
            expect(WalletsStore.list[0].balance).toBeInstanceOf(Object);
        } catch (e) {
            fail(e);
        } finally {
            WalletsStore.reset();
        }
    });
    
    it('should select a wallet in the store', async function() {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        try {
            await Action.selectWallet(wallet);
        } catch (e) {
            fail(e);
        } finally {
            WalletsStore.reset();
        }
    });
    
    it('should fail to add a wallet if not ethers.Wallet instance', async function() {
        const wallet = { privateKey: '54321', address: '123445' };
        try {
            await Action.selectWallet(wallet);
            fail('Should have thrown an error.');
        }
        catch (e) {
            expect(e.message).toEqual('Invalid Wallet');
        } finally {
            WalletsStore.reset();
        }
    });

    it('should remove an existing wallet from the store', async function() {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        try {
            await Action.addWallet("walletName", wallet);
            expect(WalletsStore.list.length).toBe(1);
            await Action.removeWallet(wallet);
            expect(WalletsStore.list.length).toBe(0);
        } catch (e) {
            fail(e);
        } finally {
            WalletsStore.reset();
        }
    });

    it('should be able to update a wallet transactions history', async function() {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        try {
            await Action.addWallet("walletName", wallet);
            await Action.updateHistory(wallet);
            expect(WalletStore.history).toBeInstanceOf(Array);
        } catch (e) {
            fail(e);
        } finally {
            WalletStore.reset();
            WalletsStore.reset();
        }
    });
});