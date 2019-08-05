import * as StorageService from './storage';
import { Prices } from '@common/constants';

export function loadActiveRate() {
    return StorageService.getItem(Prices.RATE_STORAGE_KEY);
}

export function saveActiveRate(activeRate) {
    return StorageService.setItem(Prices.RATE_STORAGE_KEY, activeRate);
}
