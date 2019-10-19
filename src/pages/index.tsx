import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Transaction } from 'web3-core';
import { Block } from 'web3-eth';
import Card from '../components/Card';
import Divider from '../components/Divider';
import Heading from '../components/Heading';
import { getLatestBlocks } from '../util/blocks';
import { getLatestTransactions } from '../util/transactions';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

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
      alert(err.message);
    }
  }

  useEffect(() => {
    fetchBlocks();
  }, []);

  if (!blocks.length) {
    return <p>Loading ...</p>;
  }

  return (
    <Container>
      <Card>
        <Heading>Blocks</Heading>
        <Divider />
        {blocks.map(block => (
          <Fragment key={block.hash}>
            <Link href="/block/[hash]" as={`/block/${block.hash}`}>
              <a>{block.hash}</a>
            </Link>
            <br />
            <br />
          </Fragment>
        ))}
      </Card>

      <Card>
        <Heading>Transactions</Heading>
        <Divider />
        {transactions.map(transaction => (
          <Fragment key={transaction.hash}>
            <Link href="/transaction/[hash]" as={`/transaction/${transaction.hash}`}>
              <a>{transaction.hash}</a>
            </Link>
            <br />
            <br />
          </Fragment>
        ))}
      </Card>
    </Container>
  );
}

export default Home;
