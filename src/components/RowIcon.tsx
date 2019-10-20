import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;
}

const IconWrapper = styled.div`
  background-color: rgba(244, 50, 127, 0.1);
  width: 50px;
  flex: 0 0 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Icon = styled.img`
  width: 18px;
`;

function RowIcon({ src, alt }: Props) {
  return (
    <IconWrapper>
      <Icon src={src} alt={alt} />
    </IconWrapper>
  );
}

export default RowIcon;
