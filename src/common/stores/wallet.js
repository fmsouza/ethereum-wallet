import { action, observable } from 'mobx';
import ethers from 'ethers';

const INITIAL = {
    item: null,
    history: [],
    loading: false
};

export class WalletStore {

    @observable item = INITIAL.item;
    @observable history = INITIAL.history;
    @observable loading = INITIAL.loading;

    @action isLoading(state) {
        this.loading = Boolean(state);
    }

    @action select(wallet) {
        if (!(wallet instanceof ethers.Wallet)) throw new Error('Invalid Wallet');
        this.item = wallet;
    }

    @action setHistory(history) {
        if (!this.item) throw new Error(`Can't update the history. No wallet was selected.`);
        if (!(history instanceof Array)) throw new Error('The history must be an array.');
        this.history = history;
    }

    @action reset() {
        this.item = INITIAL.item;
        this.history = INITIAL.history;
        this.loading = INITIAL.loading;
    }
}

export default new WalletStore();