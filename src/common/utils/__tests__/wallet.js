import ethers from 'ethers';
import * as WalletUtils from '../wallet';

describe('Wallet utils', () => {

    it('`generateMnemonics` function should return an array of 12 mnemonics', () => {
        const result = WalletUtils.generateMnemonics();
        expect(result).toBeInstanceOf(Array);
        expect(result.length).toEqual(12);
        result.forEach(mnemonic => expect(typeof mnemonic).toEqual("string"));
    });
    
    it('`loadWalletFromMnemonics` function should return an `ethers.Wallet` instance when the input is a valid array list of mnemonics', () => {
        const input = ['close', 'spatial', 'armor', 'subway', 'hero', 'wing', 'million', 'arch', 'above', 'vendor', 'address', 'dad'];
        const result = WalletUtils.loadWalletFromMnemonics(input);
        expect(result).toBeInstanceOf(ethers.Wallet);
    });
    
    it('`loadWalletFromMnemonics` function should return an `ethers.Wallet` instance when the input is a valid string list of mnemonics', () => {
        const input = 'close spatial armor subway hero wing million arch above vendor address dad';
        const result = WalletUtils.loadWalletFromMnemonics(input);
        expect(result).toBeInstanceOf(ethers.Wallet);
    });
    
    it('`loadWalletFromMnemonics` function should throw an Error when the input has less than 12 mnemonics', () => {
        const input = 'close spatial armor subway hero wing million arch above vendor address';
        try {
            WalletUtils.loadWalletFromMnemonics(input);
            fail('Should\'ve thrown an error');
        } catch(e) { expect(e.message).toEqual('invalid mnemonic')};
    });
    
    it('`loadWalletFromMnemonics` function should throw Error when the input is not string not Array', () => {
        try {
            WalletUtils.loadWalletFromMnemonics(0);
            fail('Should\'ve thrown an error');
        } catch(e) { expect(e.message).toEqual('invalid mnemonic')};

        try {
            WalletUtils.loadWalletFromMnemonics(true);
            fail('Should\'ve thrown an error');
        } catch(e) { expect(e.message).toEqual('invalid mnemonic')};

        try {
            WalletUtils.loadWalletFromMnemonics(false);
            fail('Should\'ve thrown an error');
        } catch(e) { expect(e.message).toEqual('invalid mnemonic')};

        try {
            WalletUtils.loadWalletFromMnemonics({});
            fail('Should\'ve thrown an error');
        } catch(e) { expect(e.message).toEqual('invalid mnemonic')};
    });
    
    it('`loadWalletFromPrivateKey` function should return an `ethers.Wallet` instance when the input is a valid private key string', () => {
        const input = '62384683889eae6de8440eb735856f31bb4f17815888f847c8567b3c87f00be8';
        const result = WalletUtils.loadWalletFromPrivateKey(input);
        expect(result).toBeInstanceOf(ethers.Wallet);
    });
    
    it('`loadWalletFromPrivateKey` function should throw Error when the input is not a valid Private key', () => {
        try {
            WalletUtils.loadWalletFromPrivateKey("zn37m8937nb3078038761b026");
            fail('Should\'ve thrown an error');
        } catch(e) { expect(e.message).toEqual('invalid private key')};
        try {
            WalletUtils.loadWalletFromPrivateKey("");
            fail('Should\'ve thrown an error');
        } catch(e) { expect(e.message).toEqual('invalid private key')};
        try {
            WalletUtils.loadWalletFromPrivateKey(0);
            fail('Should\'ve thrown an error');
        } catch(e) { expect(e.message).toEqual('invalid private key')};
        try {
            WalletUtils.loadWalletFromPrivateKey(true);
            fail('Should\'ve thrown an error');
        } catch(e) { expect(e.message).toEqual('invalid private key')};
        try {
            WalletUtils.loadWalletFromPrivateKey(false);
            fail('Should\'ve thrown an error');
        } catch(e) { expect(e.message).toEqual('invalid private key')};
        try {
            WalletUtils.loadWalletFromPrivateKey({});
            fail('Should\'ve thrown an error');
        } catch(e) { expect(e.message).toEqual('invalid private key')};
    });

    it('`formatBalance` function should return a formatted ETH balance string', function() {
        expect(WalletUtils.formatBalance('998493733199591196')).toBe('0.998493733199591196');
        expect(WalletUtils.formatBalance('1000000000000000000')).toBe('1.0');
        expect(WalletUtils.formatBalance('1000000000000000001')).toBe('1.000000000000000001');
        expect(WalletUtils.formatBalance('9984937331995')).toBe('0.000009984937331995');
    });

    it('`reduceBigNumbers` function should return a BigNumber representing the sum of all the BigNumber array elements', function() {
        const items = [ethers.utils.bigNumberify('1'), ethers.utils.bigNumberify('2'), ethers.utils.bigNumberify('3')];
        const result = WalletUtils.reduceBigNumbers(items);
        expect(result.toString()).toBe('6');
    });

    it('`calculateFee` function should return a BigNumber representing the transaction fee', function() {
        const txn = { gasUsed: '37164', gasPrice: '4000000000' };
        const result = WalletUtils.calculateFee(txn);
        expect(result.toString()).toBe('0.00014865600000000002');
    });
});