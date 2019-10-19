import React, { ReactNode } from 'react';
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
`;

function Layout({ children }: Props) {
  return <Main>{children}</Main>;
}

export default Layout;
