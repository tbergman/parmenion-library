import React from 'react';
import styled from 'styled-components';


/* ==========================================================================
   Styles
========================================================================== */

const Container = styled.div`
  float: ${props => props.right ? 'right' : 'left'};
`;

/* ==========================================================================
   React Component
========================================================================== */

export const Float = ({ children, right }) => (
  <Container right={right}>
    {children}
  </Container>
);

Float.propTypes = {
  right: React.PropTypes.bool,
};

Float.defaultProps = {
  right: false,
};

export default Float;
