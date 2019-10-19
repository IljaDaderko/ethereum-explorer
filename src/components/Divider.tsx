import styled from 'styled-components';

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.dividerColor};
  margin: 20px -10px;
`;

export default Divider;
