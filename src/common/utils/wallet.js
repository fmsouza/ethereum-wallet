import ethers from 'ethers';

const { HDNode, providers, utils, Wallet } = ethers;

const network = (process.env.NODE_ENV === 'production') ? 'mainnet' : 'rinkeby';

const PROVIDER = providers.getDefaultProvider(network);

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

export function formatBalance(balance) {
    return utils.formatEther(balance);
}

export function reduceBigNumbers(items) {
    if (!(items instanceof Array)) throw new Error('The input is not an Array');
    return items.reduce((prev, next) => prev.add(next), utils.bigNumberify('0'));
}

export function calculateFee({ gasUsed, gasPrice }) {
    return gasUsed * Number(formatBalance(gasPrice));
}