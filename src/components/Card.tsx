import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  box-shadow: 0 15px 45px 0 rgb(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: ${({ theme }) => theme.cardPadding};
  overflow: hidden;
  max-width: 520px;
`;

export default Card;
