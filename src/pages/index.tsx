import { useEffect, useState } from "react";
import { web3Provider } from "../util/web3";

function Home() {
  const [block, setBlock] = useState(0);

  async function getBlock() {
    try {
      const blockNumber = await web3Provider.eth.getBlockNumber();
      setBlock(blockNumber);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getBlock();
  });

  return `Block: ${block}`;
}

export default Home;
