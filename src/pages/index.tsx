import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
import { Transaction } from 'web3-core';
import { Block } from 'web3-eth';
import { getLatestBlocks } from '../util/blocks';
import { getLatestTransactions } from '../util/transactions';

function Home() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchBlocks() {
    try {
      const blocks = await getLatestBlocks(10);
      const transactions = await getLatestTransactions(10);
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
        <Fragment key={block.hash}>
          <Link href="/block/[hash]" as={`/block/${block.hash}`}>
            <a>{block.hash}</a>
          </Link>
          <br />
          <br />
        </Fragment>
      ))}

      <h1>Latest Transactions</h1>
      {transactions.map(transaction => (
        <Fragment key={transaction.hash}>
          <Link href="/transaction/[hash]" as={`/transaction/${transaction.hash}`}>
            <a>{transaction.hash}</a>
          </Link>
          <br />
          <br />
        </Fragment>
      ))}
    </Fragment>
  );
}

export default Home;
