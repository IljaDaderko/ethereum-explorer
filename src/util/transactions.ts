import { Transaction } from 'web3-core';
import { Block } from 'web3-eth';
import { getLatestBlockNumber } from './blocks';
import web3Eth from './web3';

/**
 * Get specific transaction data
 * @param hash hash of transaction to get
 */
export async function getTransaction(hash: Transaction['hash']) {
  const transaction = await web3Eth.getTransaction(hash);

  return transaction;
}

/**
 * Get transactions
 * @param blockHash block hash to extract transactions from
 * @param fromIndex start index of first transaction to get
 * @param toIndex end index of last transaction to get
 */
export async function getTransactions(
  blockref: Block['hash'] | Block['number'],
  fromIndex: number,
  toIndex: number
): Promise<Transaction[]> {
  const transactionLength = toIndex - fromIndex;
  if (transactionLength > 50 || transactionLength < 1 || !blockref) {
    throw new Error('getTransactions: Invalid arguments');
  }
  const batch = new web3Eth.BatchRequest();
  for (let txIndex = fromIndex; txIndex <= toIndex; txIndex++) {
    // @ts-ignore
    batch.add(web3Eth.getTransactionFromBlock.request(blockref, txIndex));
  }
  const { response } = await batch.execute();

  return response;
}

/**
 * Get latest transactions
 * @param limit how many latest transactions to fetch
 */
export async function getLatestTransactions(limit: number): Promise<Transaction[]> {
  if (limit > 50 || limit < 1) {
    throw new Error('getLatestTransactions: Invalid limit');
  }
  const latestBlockNumber = await getLatestBlockNumber();
  const transactionCount = await web3Eth.getBlockTransactionCount(latestBlockNumber);
  const lastTransactionIndex = transactionCount - 1;
  const transactions = await getTransactions(
    latestBlockNumber,
    lastTransactionIndex - (limit - 1),
    lastTransactionIndex
  );

  return transactions.reverse();
}
