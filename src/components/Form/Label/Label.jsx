import React from 'react';
import styled, { css } from 'styled-components';

const InnerLabel = styled.label`
  ${({ theme }) => css`
    display: block;
  `}
`;

const Label = props => <InnerLabel htmlFor={props.for} {...props} />;

Label.propTypes = {
  for: React.PropTypes.node.isRequired,
  children: React.PropTypes.node.isRequired,
};

Label.defaultProps = {
  for: null,
};

export default Label;
