import { action, observable } from 'mobx';

const INITIAL = {
    usd: 0,
    eur: 0,
    brl: 0,
    loading: false
};

export class PricesStore {

    @observable usd = INITIAL.usd;
    @observable eur = INITIAL.eur;
    @observable brl = INITIAL.brl;
    @observable loading = INITIAL.loading;

    validateInput(input) {
        if (isNaN(input) || typeof input !== 'number') throw new Error('The input is NaN');
    }

    @action isLoading(state) {
        this.loading = Boolean(state);
    }

    @action setUSDRate(rate) {
        this.validateInput(rate);
        this.usd = Number(rate);
    }
    
    @action setEURRate(rate) {
        this.validateInput(rate);
        this.eur = Number(rate);
    }
    
    @action setBRLRate(rate) {
        this.validateInput(rate);
        this.brl = Number(rate);
    }

    @action reset() {
        this.usd = INITIAL.usd;
        this.eur = INITIAL.eur;
        this.brl = INITIAL.brl;
        this.loading = INITIAL.loading;
    }
}

export default new PricesStore();