import React from 'react';
import styled from 'styled-components';


/* ==========================================================================
   Styles
========================================================================== */

const Container = styled.div`
  margin: 0;
  height: 6rem;
  background-color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.type.font_heading};
  box-shadow: ${props => props.theme.components.shadow};
`;

/* ==========================================================================
   React Component
========================================================================== */

export const Bar = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Bar.propTypes = {
  children: React.PropTypes.node.isRequired,
};

Bar.defaultProps = {};

export default Bar;
