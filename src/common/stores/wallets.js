import { action, observable } from 'mobx';

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

    @action addWallet(wallet) {
        this.list.push(wallet);
    }
    
    @action removeWallet(wallet) {
        this.list = this.list.filter(w => w.getAddress() !== wallet.getAddress());
    }

    @action reset() {
        this.list = INITIAL.list;
        this.loading = INITIAL.loading;
    }
}

export default new WalletsStore();