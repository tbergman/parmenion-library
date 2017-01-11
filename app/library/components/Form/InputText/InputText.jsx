import React from 'react';
import styled, { css } from 'styled-components';

const InputTextInner = styled.input`
  ${({ theme, isSmall }) => css`
    padding: ${isSmall ?
      `${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal}` :
      `${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal}`
    };
    font-size: ${isSmall ? '0.9em' : '1em'};
    color: ${theme.forms.input_color};
    background-color: ${theme.forms.input_bg};
    border: 0.1rem solid ${theme.forms.input_border};
    border-radius: ${theme.forms.input_border_radius};
    box-shadow: ${theme.forms.input_inner_shadow};
    line-height: ${theme.type.line_height};
    display: block;
    width: 100%;
    background-image: none;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

    &:focus {
      border-color: ${theme.forms.input_border_focus};
      outline: 0;
      box-shadow: inset 0 0.1rem 0.1rem rgba(0,0,0,.075), 0 0 0.8rem rgba(102, 175, 233, 0.6);
    }

    &[disabled],
    &[readonly] {
        background-color: ${theme.forms.input_bg_disabled};
        opacity: 1;
    }
    &[disabled] {
        cursor: ${theme.forms.cursor_disabled};
    }
  `}
`;

export const InputText = ({ placeholder, type, isSmall }) => (
  <InputTextInner placeholder={placeholder} type={type} isSmall={isSmall} />
);

InputText.propTypes = {
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  isSmall: React.PropTypes.bool,
};

InputText.defaultProps = {
  placeholder: null,
  isSmall: false,
  type: 'text',
};

export default InputText;
