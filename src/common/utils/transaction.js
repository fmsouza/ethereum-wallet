import ethers from 'ethers';

const { utils } = ethers;

const DEFAULT_GASLIMIT = 21000;
// const DEFAULT_GASLIMIT = 200000;
const DEFAULT_GASPRICE = 4000000000; // 4 gwei
// const DEFAULT_GASPRICE = 60000000000; // 60 gwei

export function createTransaction(to, value, gasLimit = DEFAULT_GASLIMIT, options = {}) {
  if (!value) throw new Error('The transaction value is required.');
  else if (!(Number(value) > 0)) throw new Error('The transaction value is invalid.');
  else if (isNaN(gasLimit)) gasLimit = DEFAULT_GASLIMIT;
  const gasPrice = DEFAULT_GASPRICE;
  value = utils.parseEther(value);
  return { gasPrice, ...options, to, gasLimit, value };
}

export function isValidTransaction(transaction) {
  return transaction instanceof Object
    && Number(transaction.value) > 0 && Number(transaction.gasLimit) > 0 && typeof transaction.to === 'string';
}