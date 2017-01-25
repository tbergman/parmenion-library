import React from 'react';
import styled, { css } from 'styled-components';

const InnerButtonGroup = styled.div`
  ${({ isJustified }) => css`
    display: ${isJustified ? 'table' : 'inline-block'};
    width: ${isJustified ? '100%' : 'auto'};
    table-layout: ${isJustified ? 'fixed' : 'auto'};
    border-collapse: ${isJustified ? 'separate' : 'auto'};
    position: relative;
    vertical-align: middle;
    > * {
      position: relative;
      float: left;
      &:hover,
      &:focus,
      &:active {
        z-index: 2;
      }
    }
    > * + * {
      margin-left: -0.1rem;
    }
    > *:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    > *:first-child {
      margin-left: 0;
      &:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
    > *:last-child:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    ${isJustified && `> * {
      float: none!important;
      display: table-cell!important;
      width: 1%!important;
    }`}
  `}
`;

const ButtonGroup = props => <InnerButtonGroup {...props} />;

ButtonGroup.propTypes = {
  isJustified: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired,
};

ButtonGroup.defaultProps = {
  isJustified: false,
};

export default ButtonGroup;
