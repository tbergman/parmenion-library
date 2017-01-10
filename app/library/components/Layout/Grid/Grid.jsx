/**
 * Custom container for hedron grid
 * https://github.com/JSBros/hedron
 */

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

export default ({ children }) => (
  <Container>
    { children }
  </Container>
);
