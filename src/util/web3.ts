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
  const blockNumber = await web3Provider.eth.getBlockNumber();
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
): Promise<any[]> {
  return new Promise(async (resolve, reject) => {
    const blockLength = toBlockNumber - fromBlockNumber;
    if (blockLength > 50 || blockLength < 1) {
      throw new Error("getBlocks: Invalid block range");
    }
    const blocks = [];
    const batch = new web3Provider.eth.BatchRequest();
    for (let i = fromBlockNumber; i <= toBlockNumber; i++) {
      batch.add(
        web3Provider.eth.getBlock.request(i, (err, data) => {
          if (err) {
            reject(err);
          } else if (data) {
            blocks.push(data);
            if (blocks.length === blockLength) {
              resolve(blocks);
            }
          }
        })
      );
    }
    batch.execute();
  });
}

/**
 * Get latest blocks
 * @param limit how many latest blocks to fetch
 */
export async function getLatestBlocks(limit: number) {
  const latestBlockNumber = await getLatestBlockNumber();
  const blocks = await getBlocks(latestBlockNumber - 10, latestBlockNumber);
  return blocks.reverse();
}
