import 'styled-components';
import theme from '../theme';
//tipagem para dar auto sujestao apos dar "theme'.'"
declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}