import { Recents as RecentsService } from '@common/services';
import { recents as RecentsStore } from '@common/stores';

export function loadRecents(store=RecentsStore, service=RecentsService) {
    store.isLoading(true);
    const recents = service.loadRecentAddresses();
    store.loadAddresses(recents);
    store.isLoading(false);
}

export function saveAddressToRecents(address, store=RecentsStore, service=RecentsService) {
    store.isLoading(true);
    store.addAddress(address);
    service.saveRecentAddresses(store.list);
    store.isLoading(false);
}