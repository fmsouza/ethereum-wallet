import { Price as PriceService } from 'common/services';
import { prices as PricesStore } from 'common/stores';

export async function getPrice() {
    PricesStore.isLoading(true);
    const { data } = await PriceService.getPrice();
    PricesStore.setUSDRate(data.USD);
    PricesStore.setEURRate(data.EUR);
    PricesStore.isLoading(false);
}