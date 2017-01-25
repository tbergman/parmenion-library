import React from 'react';
import { ThemeProvider } from 'styled-components';
import { injectGlobalStyles } from '@parmenion/library';
import brand from '../../src/theme';

injectGlobalStyles(brand);

export default props => (
  <ThemeProvider theme={brand}>
    {props.children}
  </ThemeProvider>
);
