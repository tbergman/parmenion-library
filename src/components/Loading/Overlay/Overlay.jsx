import React from 'react';
import styled, { css } from 'styled-components';

const Overlay = styled.div`
  ${({ isFull, isInverted }) => css`
    position: ${isFull ? 'fixed' : 'absolute'};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${isInverted ? 'black' : 'white'};
    width: 100%;
    height: 100%;
    opacity: ${isInverted ? 0.5 : 0.75};
    z-index: ${isFull ? 100 : 10};
  `}
`;

Overlay.propTypes = {
  isFull: React.PropTypes.bool,
  isInverted: React.PropTypes.bool,
};

Overlay.defaultProps = {
  isFull: false,
  isInverted: false,
};

export default Overlay;
