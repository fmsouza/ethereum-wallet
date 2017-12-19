import axios from 'axios';
import { Url } from '@common/constants';

export function getPrice() {
    return axios.get(`${Url.CRYPTO_COMPARE}/data/price?fsym=ETH&tsyms=USD,EUR`);
}