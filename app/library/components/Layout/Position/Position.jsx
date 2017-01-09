import React from 'react';
import styled from 'styled-components';


/* ==========================================================================
   Styles
========================================================================== */

const Container = styled.div`
  position: ${props => props.fixed ? 'fixed' : 'absolute'};
  z-index: ${props => props.zindex ? props.zindex : 1};
  top: ${props => props.top ? '0' : 'auto'};
  right: ${props => props.right ? '0' : 'auto'};
  bottom: ${props => props.bottom ? '0' : 'auto'};
  left: ${props => props.left ? '0' : 'auto'};
`;

/* ==========================================================================
   React Component
========================================================================== */

export const Position = ({ children, fixed, zindex, top, right, bottom, left }) => (
  <Container fixed={fixed} zindex={zindex} top={top} right={right} bottom={bottom} left={left}>
    {children}
  </Container>
);

Position.propTypes = {
  fixed: React.PropTypes.bool,
  zindex: React.PropTypes.number,
  top: React.PropTypes.bool,
  right: React.PropTypes.bool,
  bottom: React.PropTypes.bool,
  left: React.PropTypes.bool,
};

Position.defaultProps = {
  fixed: false,
  zindex: React.PropTypes.number,
  top: false,
  right: false,
  bottom: false,
  left: false,
};

export default Position;
