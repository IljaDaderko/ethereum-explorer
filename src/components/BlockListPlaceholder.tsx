/* eslint-disable react/jsx-no-useless-fragment */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import RowLink from './RowLink';
import Shimmer from './Shimmer';

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
  margin: 4px 0;
`;

function BlockListPlaceholder() {
  return (
    <Fragment>
      {[...Array(10)].map(() => (
        <Wrapper key={`placeholder-${Math.random()}`}>
          <RowLink href="" as="">
            <IconPlaceholder />

            <Data>
              <div>
                <TextPlaceholder />
                <TextPlaceholder />
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
