import React, { Fragment, useEffect, useState } from 'react';
import { Transaction } from 'web3-core';
import { Block } from 'web3-eth';
import { getLatestBlocks, getTransactions } from '../util/web3';

function Home() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchBlocks() {
    try {
      const blocks = await getLatestBlocks(10);
      const lastTxHashes = blocks[0].transactions.slice(0, 10) as string[];
      const transactions = await getTransactions(lastTxHashes);
      setBlocks(blocks);
      setTransactions(transactions);
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    fetchBlocks();
  }, []);

  if (!blocks.length) {
    return <p>Loading ...</p>;
  }

  return (
    <Fragment>
      <h1>Latest Blocks</h1>
      {blocks.map(block => (
        <p key={block.hash}>{block.hash}</p>
      ))}

      <h1>Latest Transactions</h1>
      {transactions.map(transaction => (
        <p key={transaction.hash}>{transaction.hash}</p>
      ))}
    </Fragment>
  );
}

export default Home;
