import { injectGlobal } from 'styled-components';

export * from './components';
export theme from './theme';
export { ThemeProvider } from 'styled-components';

export const injectGlobalStyles = theme =>
  injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  html {
    font-size: ${theme.components.base_size};
  }
  body {
    margin: 2rem;
    font-size: ${theme.type.size};
    font-family: ${theme.type.font};
    line-height: ${theme.type.line_height};
  }
  `;
