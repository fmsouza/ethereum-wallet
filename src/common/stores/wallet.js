import { action, observable } from 'mobx';
import ethers from 'ethers';

const INITIAL = {
    item: null,
    loading: false
};

export class WalletStore {

    @observable item = INITIAL.item;
    @observable loading = INITIAL.loading;

    @action isLoading(state) {
        this.loading = Boolean(state);
    }

    @action select(wallet) {
        if (!(wallet instanceof ethers.Wallet)) throw new Error('Invalid Wallet');
        this.item = wallet;
    }

    @action reset() {
        this.item = INITIAL.item;
        this.loading = INITIAL.loading;
    }
}

export default new WalletStore();