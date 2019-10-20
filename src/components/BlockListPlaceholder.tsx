/* eslint-disable react/jsx-no-useless-fragment */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import RowLink from './RowLink';
import Shimmer from './Shimmer';

interface Props {
  amount: number;
}

const Wrapper = styled.div`
  pointer-events: none;
`;

const IconPlaceholder = styled(Shimmer)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex: 0 0 50px;
  margin-right: 20px;
`;

const Data = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const TextPlaceholder = styled(Shimmer)`
  height: 12px;
  width: 100px;
  margin: 5px 0;
`;

const TransactionPlaceholder = styled(TextPlaceholder)`
  width: 130px;
`;

function BlockListPlaceholder({ amount }: Props) {
  return (
    <Fragment>
      {[...Array(amount)].map(() => (
        <Wrapper key={`placeholder-${Math.random()}`}>
          <RowLink placeholder href="" as="">
            <IconPlaceholder />

            <Data>
              <div>
                <TextPlaceholder />
                <TransactionPlaceholder />
              </div>

              <TextPlaceholder />
            </Data>
          </RowLink>
        </Wrapper>
      ))}
    </Fragment>
  );
}

export default BlockListPlaceholder;
