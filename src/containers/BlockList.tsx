import React, { Fragment, useEffect, useState } from 'react';
import TimeAgo from 'react-timeago';
import styled from 'styled-components';
import { Block } from 'web3-eth';
import BlockListPlaceholder from '../components/BlockListPlaceholder';
import Card from '../components/Card';
import Divider from '../components/Divider';
import Heading from '../components/Heading';
import RowIcon from '../components/RowIcon';
import RowLink from '../components/RowLink';
import Text from '../components/Text';
import { getLatestBlocks } from '../util/blocks';

const Data = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

function BlockList() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [amount, setAmount] = useState(10);

  async function fetchBlocks() {
    try {
      const blocks = await getLatestBlocks(amount);
      setBlocks(blocks);
    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    fetchBlocks();
  }, []);

  return (
    <Card>
      <Heading>Blocks</Heading>
      <Divider />
      {blocks.length ? (
        blocks.map(block => (
          <Fragment key={block.hash}>
            <RowLink href="/block/[hash]" as={`/block/${block.hash}`}>
              <RowIcon src="/images/block.svg" alt="block icon" />

              <Data>
                <div>
                  <Text variant="title" block>{`# ${block.number}`}</Text>
                  <Text variant="body">{`${block.transactions.length} transactions`}</Text>
                </div>

                <Text variant="caption">
                  <TimeAgo date={(block.timestamp as number) * 1000} />
                </Text>
              </Data>
            </RowLink>
          </Fragment>
        ))
      ) : (
        <BlockListPlaceholder amount={amount} />
      )}
    </Card>
  );
}

export default BlockList;
