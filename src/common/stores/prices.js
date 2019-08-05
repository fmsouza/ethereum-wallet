import { action, computed, observable } from 'mobx';
import { Prices as PricesConstants } from '@common/constants';

const INITIAL = {
    usd: 0,
    eur: 0,
    brl: 0,
    selectedRate: 'usd',
    loading: false
};

export class PricesStore {

    @observable usd = INITIAL.usd;
    @observable eur = INITIAL.eur;
    @observable brl = INITIAL.brl;
    @observable selectedRate = INITIAL.selectedRate;
    @observable loading = INITIAL.loading;

    @computed get selectedRateValue() {
        return this[this.selectedRate];
    }

    @action isLoading(state) {
        this.loading = Boolean(state);
    }

    @action setUSDRate(rate) {
        this.__validateInput(rate);
        this.usd = Number(rate);
    }
    
    @action setEURRate(rate) {
        this.__validateInput(rate);
        this.eur = Number(rate);
    }
    
    @action setBRLRate(rate) {
        this.__validateInput(rate);
        this.brl = Number(rate);
    }
    
    @action setSelectedRate(rate) {
        rate = rate || INITIAL.selectedRate;
        this.__validateRate(rate);
        this.selectedRate = String(rate);
    }

    @action reset() {
        this.usd = INITIAL.usd;
        this.eur = INITIAL.eur;
        this.brl = INITIAL.brl;
        this.selectedRate = INITIAL.selectedRate;
        this.loading = INITIAL.loading;
    }

    __validateInput(input) {
        if (isNaN(input) || typeof input !== 'number') throw new Error('The input is NaN');
    }

    __validateRate(rate) {
        if (typeof rate !== 'string' || !PricesConstants.AVAILABLE_RATES.find(r => r.label === rate)) throw new Error('The rate is not valid.');
    }
}

export default new PricesStore();