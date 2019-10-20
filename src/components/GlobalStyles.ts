import 'normalize.css/normalize.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  #__next {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  body {
    background-color: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.bodyColor};
    font-family: 'Montserrat', 'Helvetica', sans-serif;
    letter-spacing: 1px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
`;

export default GlobalStyles;
