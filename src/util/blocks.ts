import { Block } from 'web3-eth';
import web3Eth from './web3';

/**
 * Get latest block number
 */
export async function getLatestBlockNumber() {
  const blockNumber = await web3Eth.getBlockNumber();
  return blockNumber;
}

/**
 * Get specific block data
 * @param hash hash of block to get
 */
export async function getBlock(hash: Block['hash']) {
  const block = await web3Eth.getBlock(hash);

  return block;
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
  if (limit > 50 || limit < 1) {
    throw new Error('getLatestBlocks: Maximum limit of 50 exceeded');
  }
  const latestBlockNumber = await getLatestBlockNumber();
  const blocks = await getBlocks(latestBlockNumber - (limit - 1), latestBlockNumber);

  return blocks.reverse();
}
