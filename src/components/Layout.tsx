import React, { Fragment, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Main = styled.main`
  width: 100%;
  max-width: 1240px !important;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  transform: translateY(-95px);
`;

const Header = styled.header`
  height: 160px;
  width: 100vw;
  background-color: #e9486d;
  background: linear-gradient(to bottom, #ff7955 0%, #fe6161 30%, #d23078 80%);
`;

function Layout({ children }: Props) {
  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
    </Fragment>
  );
}

export default Layout;
