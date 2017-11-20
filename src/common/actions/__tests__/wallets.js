import * as Action from '../wallets';
import { WalletUtils } from 'common/utils';

describe('WalletsActions', () => {

    it('should add a wallet to the store', async function() {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        try {
            await Action.addWallet("walletName", wallet);
        } catch (e) {
            fail(e);
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
        }
    });
});