import 'styled-components';
import { darkTheme } from '../src/util/theme';

type Theme = typeof darkTheme;

declare module 'styled-components' {
  /* eslint-disable-next-line */
  export interface DefaultTheme extends Theme {}
}
