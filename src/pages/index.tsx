import { useEffect, useState } from "react";
import { getLatestBlocks } from "../util/web3";

function Home() {
  const [blocks, setBlocks] = useState([]);

  async function getBlock() {
    try {
      const blocks = await getLatestBlocks(10);
      // @ts-ignore
      setBlocks(blocks);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getBlock();
  }, []);

  return blocks.map(block => <p key={block.hash}>{block.hash}</p>);
}

export default Home;
