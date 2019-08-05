import { Api as ApiService, Prices as PricesService } from '@common/services';
import { prices as PricesStore } from '@common/stores';

export async function getPrice() {
    PricesStore.isLoading(true);
    const { data } = await ApiService.getPrice();
    PricesStore.setUSDRate(data.USD);
    PricesStore.setEURRate(data.EUR);
    PricesStore.setBRLRate(data.BRL);
    PricesStore.isLoading(false);
}

export function selectActiveRate(rate) {
    return PricesService.saveActiveRate(rate)
        .then(() => PricesStore.setSelectedRate(rate));
}

export function loadActiveRate() {
    return PricesService.loadActiveRate()
        .then(rate => PricesStore.setSelectedRate(rate));
}