import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import BlockList from '../containers/BlockList';
import TransactionList from '../containers/TransactionList';

const animationVariants = {
  initial: { y: 30, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] }
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

const Container = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

function Home() {
  return (
    <Container initial="initial" animate="enter" exit="exit" variants={animationVariants}>
      <BlockList />
      <TransactionList />
    </Container>
  );
}

export default Home;
