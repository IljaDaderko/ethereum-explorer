import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  href: string;
  as: string;
  children: ReactNode | ReactNode[];
  placeholder?: boolean;
}

const animationVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
  },
  exit: {
    opacity: 0,
    transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

const Href = styled.a`
  display: flex;
  padding: 15px ${({ theme }) => theme.cardPadding};
  margin: 0 -${({ theme }) => theme.cardPadding};
  transition: background-color 0.1s ease-in-out;
  align-items: center;
  height: 80px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.rowLinkHoverBackground};
    cursor: pointer;
    outline: none;

    figure img {
      transform: scale(1.1);
    }
  }
`;

function RowLink({ href, as, children, placeholder }: Props) {
  return (
    <motion.div
      initial={!placeholder && { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      <Link href={href} as={as}>
        <Href href={href}>{children}</Href>
      </Link>
    </motion.div>
  );
}

export default RowLink;
