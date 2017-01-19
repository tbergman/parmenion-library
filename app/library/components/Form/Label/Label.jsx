import React from 'react';
import styled, { css } from 'styled-components';

const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.components.padding_base_vertical} 0;
  `}
`;

Label.propTypes = {
  children: React.PropTypes.node.isRequired,
};

Label.defaultProps = {};

export default Label;
