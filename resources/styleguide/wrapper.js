import React from 'react';
import { ThemeProvider } from 'styled-components';
import { injectGlobalStyles } from 'library';
import brand from '../../app/theme';

injectGlobalStyles(brand);

export default props => (
  <ThemeProvider theme={brand}>
    {props.children}
  </ThemeProvider>
);
