export async function notify(title, duration, driver=require('react-native-snackbar')) {
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