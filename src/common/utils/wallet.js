import ethers from 'ethers';

const { HDNode, providers, utils, Wallet } = ethers;

const PROVIDER = providers.getDefaultProvider();

export const generateMnemonics = () => HDNode.entropyToMnemonic(utils.randomBytes(16)).split(' ');

export const loadWalletFromMnemonics = (mnemonics) => {
    const wallet = Wallet.fromMnemonic(mnemonics.join(' '));
    wallet.provider = PROVIDER;
    return wallet;
}

export const loadWalletFromPrivateKey = (pk) => new Wallet(pk, PROVIDER);