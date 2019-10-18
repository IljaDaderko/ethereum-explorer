import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Transaction } from 'web3-core';
import { getTransaction } from '../../util/transactions';

function TransactionPage() {
  const [transaction, setTransaction] = useState<Transaction | undefined>(undefined);
  const router = useRouter();
  const { hash } = router.query;

  async function fetchTransaction() {
    if (typeof hash === 'string') {
      const result = await getTransaction(hash);
      setTransaction(result);
    }
  }

  useEffect(() => {
    if (hash) {
      fetchTransaction();
    }
  }, [hash]);

  if (!transaction) {
    return <p>Loading ...</p>;
  }

  return <p>{JSON.stringify(transaction)}</p>;
}

export default TransactionPage;
