import React, { Fragment, useEffect, useState } from 'react';
import { Block } from 'web3-eth';
import Card from '../components/Card';
import Divider from '../components/Divider';
import Heading from '../components/Heading';
import RowLink from '../components/RowLink';
import { getLatestBlocks } from '../util/blocks';

function BlockList() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  async function fetchBlocks() {
    try {
      const blocks = await getLatestBlocks(10);
      setBlocks(blocks);
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
    <Card>
      <Heading>Blocks</Heading>
      <Divider />
      {blocks.map(block => (
        <Fragment key={block.hash}>
          <RowLink href="/block/[hash]" as={`/block/${block.hash}`}>
            <span>{block.hash}</span>
          </RowLink>
        </Fragment>
      ))}
    </Card>
  );
}

export default BlockList;
