import Link from 'next/link';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  href: string;
  as: string;
  children: ReactNode | ReactNode[];
}

const LinkContainer = styled.a`
  display: flex;
  padding: 15px ${({ theme }) => theme.cardPadding};
  margin: 0 -${({ theme }) => theme.cardPadding};
  transition: background-color 0.1s ease-in-out;
  align-items: center;
  height: 80px;

  &:hover {
    background-color: ${({ theme }) => theme.rowLinkHoverBackground};
    cursor: pointer;
  }
`;

function RowLink({ href, as, children }: Props) {
  return (
    <Link href={href} as={as}>
      <LinkContainer>{children}</LinkContainer>
    </Link>
  );
}

export default RowLink;
