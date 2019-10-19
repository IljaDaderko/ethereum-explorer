import React, { Fragment, useEffect, useState } from 'react';
import { Transaction } from 'web3-core';
import Card from '../components/Card';
import Divider from '../components/Divider';
import Heading from '../components/Heading';
import RowLink from '../components/RowLink';
import { getLatestTransactions } from '../util/transactions';

function TransactionList() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions() {
    try {
      const transactions = await getLatestTransactions(10);
      setTransactions(transactions);
    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  if (!transactions.length) {
    return <p>Loading ...</p>;
  }

  return (
    <Card>
      <Heading>Transactions</Heading>
      <Divider />
      {transactions.map(transaction => (
        <Fragment key={transaction.hash}>
          <RowLink href="/transaction/[hash]" as={`/transaction/${transaction.hash}`}>
            <span>{transaction.hash}</span>
          </RowLink>
        </Fragment>
      ))}
    </Card>
  );
}

export default TransactionList;
