import React from 'react';
import styled from 'styled-components';
import BlockList from '../containers/BlockList';
import TransactionList from '../containers/TransactionList';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

function Home() {
  return (
    <Container>
      <BlockList />
      <TransactionList />
    </Container>
  );
}

export default Home;
