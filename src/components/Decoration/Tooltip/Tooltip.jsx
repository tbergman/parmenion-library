import React from 'react';
import styled, { css } from 'styled-components';

// CSS only tooltip based on https://kazzkiq.github.io/balloon.css/
const Default = styled.span`
  ${({ theme, text }) => css`
    display: inline-block;
    position: relative;
    &:before,
    &:after {
      position: absolute;
      z-index: 10;
      opacity: 0;
      top: auto;
      right: auto;
      bottom: 100%;
      left: 50%;
      pointer-events: none;
      transition: all .18s ease-out .18s;
      transform: translate(-50%, 1rem);
      transform-origin: top;
    }
    &:after {
      margin-bottom: 1rem;
      padding: ${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal};
      content: '${text}';
      font-size: 0.8em;
      color: white;
      background: ${theme.colors.gray_dark};
      border-radius: ${theme.components.border_radius};
      white-space: nowrap;
      box-shadow: ${theme.components.shadow};
    }
    &:before {
      height: 0.6rem;
      width: 1.8rem;
      margin-top: 0;
      margin-bottom: 0.5rem;
      content: "";
      background: url('data:image/svg+xml;charset=utf-8, <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="12px"><path fill="${theme.colors.gray_dark}" d="M2.658,0.000 C-13.615,0.000 50.938,0.000 34.662,0.000 C28.662,0.000 23.035,12.002 18.660,12.002 C14.285,12.002 8.594,0.000 2.658,0.000 Z"/></svg>') no-repeat;
      background-size: 100% auto;
    }
    &:hover {
      &:before,
      &:after {
        opacity: 1;
        pointer-events: auto;
        transform: translate(-50%, 0);
      }
    }
  `}
`;

const Right = styled(Default)`
  ${({ theme }) => css`
    &:before,
    &:after {
      top: 50%;
      right: auto;
      bottom: auto;
      left: 100%;
      transform: translate(-1rem, -50%);
    }
    &:after {
      margin-left: 1rem;
    }
    &:before {
      height: 1.8rem;
      width: 0.6rem;
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 0.5rem;
      background: url('data:image/svg+xml;charset=utf-8, <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="36px" viewport="0 0 12 36"><path fill="${theme.colors.gray_dark}" transform="rotate(90 6 6)" d="M2.658,0.000 C-13.615,0.000 50.938,0.000 34.662,0.000 C28.662,0.000 23.035,12.002 18.660,12.002 C14.285,12.002 8.594,0.000 2.658,0.000 Z"/></svg>') no-repeat;
      background-size: 100% auto;
    }
    &:hover {
      &:before,
      &:after {
        transform: translate(0, -50%);
      }
    }
  `}
`;

const Bottom = styled(Default)`
  ${({ theme }) => css`
    &:before,
    &:after {
      top: 100%;
      right: auto;
      bottom: auto;
      left: 50%;
      transform: translate(-50%, -1rem);
    }
    &:after {
      margin-top: 1rem;
    }
    &:before {
      height: 0.6rem;
      width: 1.8rem;
      margin-top: 0.5rem;
      margin-bottom: 0;
      background: url('data:image/svg+xml;charset=utf-8, <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="12px"><path fill="${theme.colors.gray_dark}" transform="rotate(180 18 6)" d="M2.658,0.000 C-13.615,0.000 50.938,0.000 34.662,0.000 C28.662,0.000 23.035,12.002 18.660,12.002 C14.285,12.002 8.594,0.000 2.658,0.000 Z"/></svg>') no-repeat;
      background-size: 100% auto;
    }
    &:hover {
      &:before,
      &:after {
        transform: translate(-50%, 0);
      }
    }
  `}
`;

const Left = styled(Default)`
  ${({ theme }) => css`
    &:before,
    &:after {
      top: 50%;
      right: 100%;
      bottom: auto;
      left: auto;
      transform: translate(1rem, -50%);
    }
    &:after {
      margin-right: 1rem;
    }
    &:before {
      height: 1.8rem;
      width: 0.6rem;
      margin-bottom: 0;
      margin-right: 0.5rem;
      background: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="36px"><path fill="${theme.colors.gray_dark}" transform="rotate(-90 18 18)" d="M2.658,0.000 C-13.615,0.000 50.938,0.000 34.662,0.000 C28.662,0.000 23.035,12.002 18.660,12.002 C14.285,12.002 8.594,0.000 2.658,0.000 Z"/></svg>') no-repeat;
      background-size: 100% auto;
    }
    &:hover {
      &:before,
      &:after {
        transform: translate(0, -50%);
      }
    }
  `}
`;

export const Tooltip = ({ children, text, position }) => {
  const InnerTooltip = (() => {
    switch (position) {
      case 1:
        return Right;
      case 2:
        return Bottom;
      case 3:
        return Left;
      default:
        return Default;
    }
  })();

  return (
    <InnerTooltip text={text}>
      {children}
    </InnerTooltip>
  );
};

Tooltip.propTypes = {
  children: React.PropTypes.node.isRequired,
  text: React.PropTypes.string.isRequired,
  position: React.PropTypes.number.isRequired,
};

Tooltip.defaultProps = {};
