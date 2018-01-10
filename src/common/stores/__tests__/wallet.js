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

    it('should be able to update the txn history for the currently active wallet', () => {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        walletStore.select(wallet);
        const txn = {
            blockNumber: "1387116",
            timeStamp: "1512866873",
            hash: "0xa645ceb60ffabcd46946936a4b98629959f5fa7baa51670ff12fb98f8a12b15c",
            nonce: "5",
            blockHash: "0xd28106b1757bd3c32409d7ac1845c17c646f8151e11f8667ae957be8be5249f6",
            transactionIndex: "0",
            from: "0xadeed6a3411b719f6c771f9140c71e5b5ca2c6bd",
            to: "0x589d41fee71b6c972f7ab20e1fa6eec11e6c3df6",
            value: "1000000000000000000",
            gas: "121000",
            gasPrice: "30000000000",
            isError: "0",
            txreceipt_status: "1",
            input: "0x",
            contractAddress: "",
            cumulativeGasUsed: "21000",
            gasUsed: "21000",
            confirmations: "57343"
        };

        walletStore.setHistory([txn]);
        expect(walletStore.item.getAddress()).toBe(wallet.getAddress());
        expect(walletStore.history).toBeInstanceOf(Array);
        expect(walletStore.history.length).toBe(1);
    });

    it('should fail to update the txn history if no wallet is selected', () => {
        try {
            walletStore.setHistory([]);
            fail('Should have thrown an error');
        } catch (e) {
            expect(e.message).toBe(`Can't update the history. No wallet was selected.`);
        }
    });

    it('should fail to update the txn history if the input is not an array', () => {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        walletStore.select(wallet);
        try {
            walletStore.setHistory("whatever");
            fail('Should have thrown an error');
        } catch(e) { expect(e.message).toBe('The history must be an array.') }
        try {
            walletStore.setHistory(true);
            fail('Should have thrown an error');
        } catch(e) { expect(e.message).toBe('The history must be an array.') }
        try {
            walletStore.setHistory(false);
            fail('Should have thrown an error');
        } catch(e) { expect(e.message).toBe('The history must be an array.') }
        try {
            walletStore.setHistory({});
            fail('Should have thrown an error');
        } catch(e) { expect(e.message).toBe('The history must be an array.') }
        expect(walletStore.history).toBeInstanceOf(Array);
        expect(walletStore.history.length).toBe(0);
    });
    
    it('should be able to reset the store state', () => {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        walletStore.select(wallet);
        const txn = {
            blockNumber: "1387116",
            timeStamp: "1512866873",
            hash: "0xa645ceb60ffabcd46946936a4b98629959f5fa7baa51670ff12fb98f8a12b15c",
            nonce: "5",
            blockHash: "0xd28106b1757bd3c32409d7ac1845c17c646f8151e11f8667ae957be8be5249f6",
            transactionIndex: "0",
            from: "0xadeed6a3411b719f6c771f9140c71e5b5ca2c6bd",
            to: "0x589d41fee71b6c972f7ab20e1fa6eec11e6c3df6",
            value: "1000000000000000000",
            gas: "121000",
            gasPrice: "30000000000",
            isError: "0",
            txreceipt_status: "1",
            input: "0x",
            contractAddress: "",
            cumulativeGasUsed: "21000",
            gasUsed: "21000",
            confirmations: "57343"
        };
        walletStore.setHistory([txn]);
        walletStore.isLoading(true);
        walletStore.reset();
        expect(walletStore.item).toBe(null);
        expect(walletStore.history.length).toBe(0);
        expect(walletStore.loading).toBeFalsy();
    });
    
    it('should be able to add pending transactions to the history', () => {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        walletStore.select(wallet);
        const txn = {
            blockNumber: "1387116",
            timeStamp: "1512866873",
            hash: "0xa645ceb60ffabcd46946936a4b98629959f5fa7baa51670ff12fb98f8a12b15c",
            nonce: "5",
            blockHash: "0xd28106b1757bd3c32409d7ac1845c17c646f8151e11f8667ae957be8be5249f6",
            transactionIndex: "0",
            from: "0xadeed6a3411b719f6c771f9140c71e5b5ca2c6bd",
            to: "0x589d41fee71b6c972f7ab20e1fa6eec11e6c3df6",
            value: "1000000000000000000",
            gas: "121000",
            gasPrice: "30000000000",
            isError: "0",
            txreceipt_status: "1",
            input: "0x",
            contractAddress: "",
            cumulativeGasUsed: "21000",
            gasUsed: "21000",
            confirmations: "57343"
        };
        expect(walletStore.pendingTransactions).toBeInstanceOf(Array);
        expect(walletStore.pendingTransactions.length).toBe(0);
        expect(walletStore.history).toBeInstanceOf(Array);
        expect(walletStore.history.length).toBe(0);
        walletStore.addPendingTransaction(txn);
        expect(walletStore.pendingTransactions.length).toBe(1);
        expect(walletStore.history.length).toBe(0);
    });
    
    it('should be able to move a pending transaction to the history', () => {
        const mnemonics = WalletUtils.generateMnemonics();
        const wallet = WalletUtils.loadWalletFromMnemonics(mnemonics);
        walletStore.select(wallet);
        const txn = {
            blockNumber: "1387116",
            timeStamp: "1512866873",
            hash: "0xa645ceb60ffabcd46946936a4b98629959f5fa7baa51670ff12fb98f8a12b15c",
            nonce: "5",
            blockHash: "0xd28106b1757bd3c32409d7ac1845c17c646f8151e11f8667ae957be8be5249f6",
            transactionIndex: "0",
            from: "0xadeed6a3411b719f6c771f9140c71e5b5ca2c6bd",
            to: "0x589d41fee71b6c972f7ab20e1fa6eec11e6c3df6",
            value: "1000000000000000000",
            gas: "121000",
            gasPrice: "30000000000",
            isError: "0",
            txreceipt_status: "1",
            input: "0x",
            contractAddress: "",
            cumulativeGasUsed: "21000",
            gasUsed: "21000",
            confirmations: "57343"
        };
        expect(walletStore.pendingTransactions).toBeInstanceOf(Array);
        expect(walletStore.pendingTransactions.length).toBe(0);
        expect(walletStore.history).toBeInstanceOf(Array);
        expect(walletStore.history.length).toBe(0);
        walletStore.addPendingTransaction(txn);
        expect(walletStore.pendingTransactions.length).toBe(1);
        expect(walletStore.history.length).toBe(0);
        walletStore.moveToHistory(txn);
        expect(walletStore.pendingTransactions.length).toBe(0);
        expect(walletStore.history.length).toBe(1);
    });
});