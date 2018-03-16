import { action, observable } from 'mobx';

const INITIAL = {
    addresses: [],
    loading: false
};

export class RecentsStore {

    @observable addresses = INITIAL.addresses;
    @observable loading = INITIAL.loading;

    @action isLoading(state) {
        this.loading = Boolean(state);
    }

    @action addAddress(address) {
        this.addresses.push(address);
    }

    @action reset() {
        this.addresses = INITIAL.addresses;
        this.loading = INITIAL.loading;
    }
}

export default new RecentsStore();