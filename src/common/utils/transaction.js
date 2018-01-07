import ethers from 'ethers';

const { utils } = ethers;

const DEFAULT_GASLIMIT = 21000;

export function createTransaction(to, value, gasLimit = DEFAULT_GASLIMIT, options) {
  if (!value) throw new Error('The transaction value is required.');
  else if (value instanceof Object || isNaN(value)) throw new Error('The transaction value is invalid.');
  else if (isNaN(gasLimit)) gasLimit = DEFAULT_GASLIMIT;
  value = utils.parseEther(value);
  return { ...options, to, gasLimit, value };
}