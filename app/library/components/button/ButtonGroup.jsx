import React from 'react';
import styled from 'styled-components';
import styles from '../../theme';


/* ==========================================================================
   Styles
========================================================================== */

const Group = styled.div`
    position: relative;
    display: ${ props => props.isJustified ? 'table' : 'inline-block' };
    width: ${ props => props.isJustified ? '100%' : 'auto' };
    table-layout: ${ props => props.isJustified ? 'fixed' : 'auto' };
    border-collapse: ${ props => props.isJustified ? 'separate' : 'auto' };
    vertical-align: middle;
    > * {
      position: relative;
      float: left;
      &:hover,
      &:focus,
      &:active,
      &.is-active {
        z-index: 2;
      }
    }
    > * + * {
      margin-left: -1px;
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
    ${ props => props.isJustified && `> * {
      float: none!important;
      display: table-cell!important;
      width: 1%!important;
    }`}
`;


/* ==========================================================================
   React Component
========================================================================== */

class ButtonGroup extends React.Component {
  render() {
    const {isJustified, children} = this.props;
    return (
      <Group isJustified={isJustified}>
        {children}
      </Group>
    );
  }
}

ButtonGroup.propTypes = {
  isJustified: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired
};

ButtonGroup.defaultProps = {
  isJustified: false
};

export default ButtonGroup;