import React from 'react';
import styled, { css } from 'styled-components';


/* ==========================================================================
   Styles
========================================================================== */

const smallInput = theme => css`
  padding: ${theme.components.padding_small_vertical} ${theme.components.padding_small_horizontal};
  font-size: 0.9em;
`;

const normalInput = theme => css`
  padding: ${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal};
  font-size: 1em;
`;

const Input = styled.input`${({ theme, isSmall }) => css`
    ${isSmall ? smallInput(theme) : normalInput(theme)}

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

    /* Fix: Unstyle the caret on <select>s in IE10+. */
    &::-ms-expand {
        border: 0;
        background-color: transparent;
    }

    /* Disabled and read-only inputs */
    &[disabled],
    &[readonly] {
        background-color: ${theme.forms.input_bg_disabled};
        opacity: 1;
    }
    &[disabled] {
        cursor: ${theme.forms.cursor_disabled};
    }
`}`;


/* ==========================================================================
   React Component
========================================================================== */

export const InputText = ({ placeholder, type, isSmall }) => (
  <Input placeholder={placeholder} type={type} isSmall={isSmall} />
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
