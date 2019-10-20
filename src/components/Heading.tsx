import styled from 'styled-components';

const Heading = styled.h2`
  color: ${({ theme }) => theme.headingColor};
  font-size: 36px;
  margin: 0;
  line-height: 34px;
`;

export default Heading;
