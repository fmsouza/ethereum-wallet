import * as Action from '../wallets';
import { Wallet as WalletUtils } from 'common/utils';
import { wallets as WalletsStore } from 'common/stores';

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
});