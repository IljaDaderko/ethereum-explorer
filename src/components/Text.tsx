import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children: ReactNode;
  variant: 'title' | 'body' | 'caption';
  block?: boolean;
}

const titleCss = css`
  font-size: 15px;
  color: ${({ theme }) => theme.textTitleColor};
  line-height: 19px;
`;

const captionCss = css`
  font-size: 10px;
  color: ${({ theme }) => theme.textCaptionColor};
  line-height: 19px;
  font-weight: 700;
  text-transform: uppercase;
`;

const bodyCss = css`
  color: ${({ theme }) => theme.textBodyColor};
  line-height: 19px;
  font-size: 13px;
`;

const TextSpan = styled.span<Props>`
  ${({ variant }) => variant === 'title' && titleCss}
  ${({ variant }) => variant === 'caption' && captionCss}
  ${({ variant }) => variant === 'body' && bodyCss}
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
`;

function Text({ children, variant, block }: Props) {
  return (
    <TextSpan variant={variant} block={block}>
      {children}
    </TextSpan>
  );
}

export default Text;
