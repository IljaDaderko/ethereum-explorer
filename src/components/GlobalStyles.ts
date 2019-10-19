import 'normalize.css/normalize.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background}
  }
`;

export default GlobalStyles;
