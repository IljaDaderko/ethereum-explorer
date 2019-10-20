import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import BlockList from '../containers/BlockList';

const Container = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

function Home() {
  return (
    <Container initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <BlockList />
    </Container>
  );
}

export default Home;
