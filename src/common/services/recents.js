import * as StorageService from './storage';
import { Recents } from '@common/constants';

export async function loadRecentAddresses() {
    const recents = await StorageService.getItem(Recents.STORAGE_KEY);
    return recents ? JSON.parse(recents) : [];
}

export async function saveRecentAddresses(recents) {
    await StorageService.setItem(Recents.STORAGE_KEY, JSON.stringify(recents));
}