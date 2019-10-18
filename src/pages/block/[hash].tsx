import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Block } from 'web3-eth';
import { getBlock } from '../../util/blocks';

function BlockPage() {
  const [block, setBlock] = useState<Block | undefined>(undefined);
  const router = useRouter();
  const { hash } = router.query;

  async function fetchBlock() {
    if (typeof hash === 'string') {
      const result = await getBlock(hash);
      setBlock(result);
    }
  }

  useEffect(() => {
    if (hash) {
      fetchBlock();
    }
  }, [hash]);

  if (!block) {
    return <p>Loading ...</p>;
  }

  return <p>{JSON.stringify(block)}</p>;
}

export default BlockPage;
