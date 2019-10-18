import Web3 from 'web3';
import { Transaction } from 'web3-core';
import { Block } from 'web3-eth';

/**
 * Create web3 provider with given provider
 * localhost fallback is only provided here to ensure typescript
 * doesn't resolve web3Eth to undefined, there is no actual server
 */
export const web3Eth = new Web3(Web3.givenProvider || 'http://localhost:8545').eth;

/**
 * Get latest block number
 */
export async function getLatestBlockNumber() {
  const blockNumber = await web3Eth.getBlockNumber();
  return blockNumber;
}

/**
 * Get blocks
 * @param fromBlockNumber block number to start from
 * @param toBlockNumber block number to stop at
 */
export async function getBlocks(
  fromBlockNumber: number,
  toBlockNumber: number
): Promise<Block[]> {
  const blockLength = toBlockNumber - fromBlockNumber;
  if (blockLength > 50 || blockLength < 1) {
    throw new Error('getBlocks: Invalid block range');
  }
  const batch = new web3Eth.BatchRequest();
  for (let blockNo = fromBlockNumber; blockNo <= toBlockNumber; blockNo++) {
    // @ts-ignore
    batch.add(web3Eth.getBlock.request(blockNo));
  }
  const { response } = await batch.execute();

  return response;
}

/**
 * Get latest blocks
 * @param limit how many latest blocks to fetch
 */
export async function getLatestBlocks(limit: number): Promise<Block[]> {
  const latestBlockNumber = await getLatestBlockNumber();
  const blocks = await getBlocks(latestBlockNumber - (limit - 1), latestBlockNumber);

  return blocks.reverse();
}

/**
 * Get transactions
 * @param transactionHashes array of transaction hashes to fetch
 */
export async function getTransactions(
  transactionHashes: string[]
): Promise<Transaction[]> {
  const transactionLength = transactionHashes.length;
  if (transactionLength > 50 || transactionLength < 1) {
    throw new Error('getTransactions: Invalid transaction array length');
  }
  const batch = new web3Eth.BatchRequest();
  transactionHashes.forEach(hash => {
    // @ts-ignore
    batch.add(web3Eth.getTransaction.request(hash));
  });
  const { response } = await batch.execute();

  return response;
}
