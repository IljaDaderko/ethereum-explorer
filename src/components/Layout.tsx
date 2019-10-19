import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Main = styled.main`
  max-width: 1240px;
`;

function Layout({ children }: Props) {
  return <Main>{children}</Main>;
}

export default Layout;
