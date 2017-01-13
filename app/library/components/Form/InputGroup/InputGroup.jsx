import React from 'react';
import styled, { css } from 'styled-components';

const InputGroupInner = styled.div`
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

const AddonString = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.components.padding_base_horizontal};
    font-size: 1em;
    color: ${theme.forms.input_color};
    background-color: ${theme.colors.gray_lighter};
    border: 0.1rem solid ${theme.forms.input_border};
    border-radius: ${theme.forms.input_border_radius};
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
  `}
`;

const AddonButton = styled.span`
  display: table-cell;
  position: relative;
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
  > * {
    box-shadow: none;
    margin-left: -0.1rem;
    &:hover,
    &:focus,
    &:active {
      z-index: 2;
    }
  }
  &:first-child > * {
    margin-left: 0;
    margin-right: -0.1rem;
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child > * {
    z-index: 2;
    margin-left: -0.1rem;
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const InputGroup = ({ children, start, end }) => {
  let AddonStart;
  let AddonEnd;

  if (start && typeof start === 'string') {
    AddonStart = <AddonString>{start}</AddonString>;
  } else if (start) {
    AddonStart = <AddonButton>{start}</AddonButton>;
  }

  if (end && typeof end === 'string') {
    AddonEnd = <AddonString>{end}</AddonString>;
  } else if (end) {
    AddonEnd = <AddonButton>{end}</AddonButton>;
  }
  return (
    <InputGroupInner>
      {AddonStart}
      {children}
      {AddonEnd}
    </InputGroupInner>
  );
};

InputGroup.propTypes = {
  children: React.PropTypes.node.isRequired,
  start: React.PropTypes.node,
  end: React.PropTypes.node,
};

InputGroup.defaultProps = {
  start: null,
  end: null,
};

export default InputGroup;