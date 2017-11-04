import ethers from 'ethers';

const { HDNode, providers, utils, Wallet } = ethers;

const PROVIDER = providers.getDefaultProvider();

export const generateMnemonics = () => HDNode.entropyToMnemonic(utils.randomBytes(16)).split(' ');

export const loadWalletFromMnemonics = (mnemonics) => {
    if (!(mnemonics instanceof Array) && typeof mnemonics !== 'string')
        throw new Error('invalid mnemonic');
    else if (mnemonics instanceof Array)
        mnemonics = mnemonics.join(' ');

    const wallet = Wallet.fromMnemonic(mnemonics);
    wallet.provider = PROVIDER;
    return wallet;
}

export const loadWalletFromPrivateKey = (pk) => {
    try {
        if (pk.indexOf('0x') !== 0) pk = `0x${pk}`;
        return new Wallet(pk, PROVIDER);
    } catch (e) {
        throw new Error('invalid private key');
    }
}