import React from 'react';
import styled from 'styled-components';
import styles from '../../../theme';


/* ==========================================================================
   Styles
========================================================================== */

const AddonString = styled.span`
  padding: 0 ${styles.components.padding_base_horizontal};
  font-size: 1rem;
  color: ${styles.forms.input_color};
  background-color: ${styles.colors.gray_lighter};
  border: 1px solid ${styles.forms.input_border};
  border-radius: ${styles.forms.input_border_radius};
  display: table-cell;
  width: 1%;
  font-weight: normal;
  line-height: 1;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
  &:first-child {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child {
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const AddonButton = styled.span`
  display: table-cell;
  position: relative;
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
  > * {
    box-shadow: none;
    margin-left: -1px;
    &:hover,
    &:focus,
    &:active {
      z-index: 2;
    }
  }
  &:first-child > * {
    margin-left: 0;
    margin-right: -1px;
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child > * {
    z-index: 2;
    margin-left: -1px;
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const Container = styled.div`
  position: relative;
  display: table;
  border-collapse: separate;
  > input {
    position: relative;
    z-index: 2;
    float: left;
    width: 100%;
    margin-bottom: 0;
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
  }
`;


/* ==========================================================================
   React Component
========================================================================== */

class InputGroup extends React.Component {
  render() {
    const {children, start, end} = this.props;

    let AddonStart = start ? (typeof start === 'string') ? <AddonString>{start}</AddonString> : <AddonButton>{start}</AddonButton> : null;
    let AddonEnd = end ? (typeof end === 'string') ? <AddonString>{end}</AddonString> : <AddonButton>{end}</AddonButton> : null;

    return (
      <Container>
        {AddonStart}
        {children}
        {AddonEnd}
      </Container>
    );
  }
}

InputGroup.propTypes = {
  children: React.PropTypes.node.isRequired,
  start: React.PropTypes.node,
  end: React.PropTypes.node
};

InputGroup.defaultProps = {
  start: null,
  end: null
};

export default InputGroup;