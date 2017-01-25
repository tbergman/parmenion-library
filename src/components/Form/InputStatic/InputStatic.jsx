import React from 'react';
import styled, { css } from 'styled-components';

const InnerInputStatic = styled.div`
  ${({ theme, isSmall }) => css`
    display: block;
    padding: ${isSmall ?
      `${theme.components.padding_small_vertical} ${theme.components.padding_small_horizontal}` :
      `${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal}`
    };
    border-radius: ${theme.components.border_radius};
    border: 0.1rem solid ${theme.colors.gray_lighter};
    background: ${theme.colors.gray_lighter};
    color: ${theme.type.text_color};
    font-size: 1em;
    text-align: left;
  `}
`;

const InputStatic = ({ isSmall, children }) => (
  <InnerInputStatic isSmall={isSmall}>
    {children}
  </InnerInputStatic>
);

InputStatic.propTypes = {
  isSmall: React.PropTypes.bool,
  children: React.PropTypes.node,
};

InputStatic.defaultProps = {};

export default InputStatic;
