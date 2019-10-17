import Web3 from "web3";

/**
 * Create web3 provider with given provider
 */
export const web3Provider = Web3.givenProvider
  ? new Web3(Web3.givenProvider)
  : undefined;

/**
 * Get latest block number
 */
export async function getLatestBlockNumber() {
  try {
    const blockNumber = await web3Provider.eth.getBlockNumber();
    return blockNumber;
  } catch (err) {
    console.error(err);
  }
}

/**
 * Get latest blocks
 * @param blocksAgo how many blocks back to go from the current one
 */
export async function getLatestBlocks(blocksAgo: number) {
  return new Promise(async (resolve, reject) => {
    const blocks = [];

    try {
      const latestBlockNumber = await getLatestBlockNumber();
      const blockNumberRange = [...new Array(blocksAgo)].map((_, index) => {
        return latestBlockNumber - index;
      });
      const batch = new web3Provider.eth.BatchRequest();
      blockNumberRange.forEach(blockNumber => {
        batch.add(
          web3Provider.eth.getBlock.request(blockNumber, (err, data) => {
            if (err) {
              reject(err);
            } else if (data) {
              blocks.push(data);
              if (blocks.length === blocksAgo) {
                resolve(blocks);
              }
            }
          })
        );
      });
      batch.execute();
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
}
