import { action, observable } from 'mobx';
import ethers from 'ethers';

const INITIAL = {
    list: [],
    loading: false
};

export class WalletsStore {

    @observable list = INITIAL.list;
    @observable loading = INITIAL.loading;

    @action isLoading(state) {
        this.loading = Boolean(state);
    }

    @action addWallet(walletName, wallet, walletDescription = '') {
        if (!(wallet instanceof ethers.Wallet)) throw new Error('Invalid Wallet');
        wallet.name = walletName;
        wallet.description = walletDescription;
        this.list.push(wallet);
    }
    
    @action removeWallet(wallet) {
        this.list = this.list.filter(w => w.getAddress() !== wallet.getAddress());
    }

    @action setBalance(address, amount) {
        const wallet = this.list.find(wallet => wallet.getAddress() === address);
        if (!wallet) throw new Error('Wallet not found');
        wallet.balance = amount;
        const otherWallets = this.list.filter(wallet => wallet.getAddress() !== address);
        this.list = [...otherWallets, wallet];
    }

    @action reset() {
        this.list = INITIAL.list;
        this.loading = INITIAL.loading;
    }
}

export default new WalletsStore();