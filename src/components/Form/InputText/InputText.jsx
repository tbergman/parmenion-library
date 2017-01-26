import React from 'react';
import tc from 'tinycolor2';
import styled, { css } from 'styled-components';

const InnerInputText = styled.input`
  ${({ theme, isSmall }) => css`
    padding: ${isSmall ?
      `${theme.components.padding_small_vertical} ${theme.components.padding_small_horizontal}` :
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
    height: ${theme.components.input_height}; /* IE and Firefox require height */
    background-image: none;
    transition: border-color cubic-bezier(0.23, 1, 0.32, 1) .15s, box-shadow cubic-bezier(0.23, 1, 0.32, 1) .15s;

    &:focus {
      border-color: ${theme.forms.input_border_focus};
      outline: 0;
      box-shadow: 0 0 0 1px white, 0 0 0 2.5px ${tc(theme.forms.input_border_focus).lighten(60).toString()};
    }

    &[disabled] {
        background-color: ${theme.forms.input_bg_disabled};
        opacity: 1;
        cursor: ${theme.forms.cursor_disabled};
    }

    &[readonly] {
        cursor: pointer;
    }
  `}
`;

export const InputText = ({ isReadOnly, ...props }) => (
  <InnerInputText
    {...props}
    readOnly={isReadOnly}
  />
);

InputText.propTypes = {
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  isSmall: React.PropTypes.bool,
  isReadOnly: React.PropTypes.bool,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onClick: React.PropTypes.func,
  onKeyDown: React.PropTypes.func,
};

InputText.defaultProps = {
  placeholder: null,
  isSmall: false,
  isReadOnly: false,
  type: 'text',
  value: null,
  onChange: null,
  onClick: null,
  onKeyDown: null,
};
