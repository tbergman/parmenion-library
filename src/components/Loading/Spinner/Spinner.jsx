import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const InnerSpinner = styled.span`
  ${props => props.isCentered && `
    position: absolute;
    z-index: 20;
    left: 0;
    top: 50%;
    margin-top: -1rem;
    width: 100%;
    text-align: center;
  `};
`;

const bouncedelay = keyframes`
  0%, 80%, 100% {
    transform: scale(0.0);
  }
  40% {
    transform: scale(1.0);
  }
`;

const Circle = styled.span`
  ${({ theme, isInverted }) => css`
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${isInverted ? 'white' : theme.colors.gray_dark};
    margin: 0 0.2rem;
    border-radius: 100%;
    display: inline-block;
    animation: ${bouncedelay} 1.4s infinite ease-in-out both;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }
    &:nth-child(2) {
      animation-delay: -0.16s;
    }
  `}
`;

export const Spinner = ({ isInverted, isCentered }) => (
  <InnerSpinner isCentered={isCentered}>
    <Circle isInverted={isInverted} />
    <Circle isInverted={isInverted} />
    <Circle isInverted={isInverted} />
  </InnerSpinner>
);

Spinner.propTypes = {
  isCentered: React.PropTypes.bool,
  isInverted: React.PropTypes.bool,
};

Spinner.defaultProps = {
  isCentered: false,
  isInverted: false,
};
