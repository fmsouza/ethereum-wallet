import axios from 'axios';

const BASE_URL = 'https://min-api.cryptocompare.com/data/price';

export function getPrice() {
    return axios.get(`${BASE_URL}?fsym=ETH&tsyms=USD,EUR`);
}