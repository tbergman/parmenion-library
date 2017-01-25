import React from 'react';
import styled, { css } from 'styled-components';

const InnerLabel = styled.label`
  ${({ theme }) => css`
    display: block;
  `}
`;

const Label = props => <InnerLabel {...props} />;

Label.propTypes = {
  children: React.PropTypes.node.isRequired,
};

Label.defaultProps = {};

export default Label;
