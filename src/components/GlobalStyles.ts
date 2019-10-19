import 'normalize.css/normalize.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.bodyColor};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    font-family: 'Montserrat', 'Helvetica', sans-serif;
  }
`;

export default GlobalStyles;
