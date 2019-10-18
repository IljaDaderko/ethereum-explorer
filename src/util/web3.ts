import Web3 from 'web3';

/**
 * Create web3 provider with given provider
 * localhost fallback is only provided here to ensure typescript
 * doesn't resolve web3Eth to undefined, there is no actual server
 */
const web3Eth = new Web3(Web3.givenProvider || 'http://localhost:8545').eth;

export default web3Eth;
