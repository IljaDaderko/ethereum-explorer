import React, { useEffect, useState } from 'react';
import { getLatestBlocks } from '../util/web3';

function Home() {
  const [blocks, setBlocks] = useState([]);

  async function fetchBlocks() {
    try {
      const blocks = await getLatestBlocks(10);
      setBlocks(blocks);
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    fetchBlocks();
  }, []);

  return blocks.map(block => <p key={block.hash}>{block.hash}</p>);
}

export default Home;
