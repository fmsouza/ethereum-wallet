import * as StorageService from './storage';
import { Recents } from '@common/constants';

export async function loadRecentAddresses() {
    const recents = await StorageService.getItem(Recents.STORAGE_KEY);
    return recents ? JSON.parse(recents) : [];
}

export function saveRecentAddresses(recents) {
    return StorageService.setItem(Recents.STORAGE_KEY, JSON.stringify(recents));
}

export function removeRecentAddresses() {
    return StorageService.deleteItem(Recents.STORAGE_KEY);
}
