import React from 'react';
import styled, { css } from 'styled-components';

const InnerInputGroup = styled.div`
  position: relative;
  display: table;
  width: 100%;
  border-collapse: separate;
`;

const InputContainer = styled.div`
  display: table-cell;
  &:not(:last-child) input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:not(:first-child) input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & + & input {
    border-left: 0;
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
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const InputGroup = ({ children, start, end }) => {
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

  const inputs = React.Children.map(children, input => (
    <InputContainer key={input.props.id}>
      {input}
    </InputContainer>
  ));

  return (
    <InnerInputGroup>
      {AddonStart}
      {inputs}
      {AddonEnd}
    </InnerInputGroup>
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
