import React from 'react';
import styled, { css } from 'styled-components';


/* ==========================================================================
   Styles
========================================================================== */

const Container = styled.div`
  ${({ fixed, zindex, top, right, bottom, left }) => css`
    position: ${fixed ? 'fixed' : 'absolute'};
    z-index: ${zindex || '1'};
    top: ${top ? '0' : 'auto'};
    right: ${right ? '0' : 'auto'};
    bottom: ${bottom ? '0' : 'auto'};
    left: ${left ? '0' : 'auto'};
  `}
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
