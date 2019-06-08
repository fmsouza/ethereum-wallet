import Snackbar from 'react-native-snackbar';
import { Recents as RecentsService, Wallets as WalletsService } from '@common/services';
import * as store from '@common/stores';

export async function notify(title, duration, driver=Snackbar) {
    switch (duration) {

        case 'long':
            duration = driver.LENGTH_LONG;
            break;

        case 'indefinite':
            duration = driver.LENGTH_INDEFINITE;
            break;

        case 'short':
        default:
            duration = driver.LENGTH_SHORT;
            break;
    }
    
    driver.show({ title, duration });
}

export async function eraseAllData() {
    await cleanStorage();
    cleanStores();
}

function cleanStorage() {
    return [
        RecentsService.removeRecentAddresses(),
        WalletsService.deleteWalletPKs()
    ];
}

function cleanStores() {
    store.prices.reset();
    store.recents.reset();
    store.wallet.reset();
    store.wallets.reset();
}