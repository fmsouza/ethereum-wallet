import ethers from 'ethers';

const { HDNode, providers, utils, Wallet } = ethers;

const PROVIDER = providers.getDefaultProvider();

export function generateMnemonics() {
    return HDNode.entropyToMnemonic(utils.randomBytes(16)).split(' ');
}

export function loadWalletFromMnemonics(mnemonics) {
    if (!(mnemonics instanceof Array) && typeof mnemonics !== 'string')
        throw new Error('invalid mnemonic');
    else if (mnemonics instanceof Array)
        mnemonics = mnemonics.join(' ');

    const wallet = Wallet.fromMnemonic(mnemonics);
    wallet.provider = PROVIDER;
    return wallet;
}

export function loadWalletFromPrivateKey(pk) {
    try {
        if (pk.indexOf('0x') !== 0) pk = `0x${pk}`;
        return new Wallet(pk, PROVIDER);
    } catch (e) {
        throw new Error('invalid private key');
    }
}