import { action, observable } from 'mobx';

const INITIAL = {
    list: [],
    loading: false
};

export class RecentsStore {

    @observable list = INITIAL.list;
    @observable loading = INITIAL.loading;

    @action isLoading(state) {
        this.loading = Boolean(state);
    }

    @action addAddress(address) {
        const index = this.list.findIndex(a => a === address);
        if (index > -1) return;
        this.list.push(address);
    }

    @action loadAddresses(addresses) {
        this.list = [];
        addresses.forEach(address => this.addAddress(address));
    }

    @action reset() {
        this.list = INITIAL.list;
        this.loading = INITIAL.loading;
    }
}

export default new RecentsStore();