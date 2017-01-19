import React from 'react';
import styled, { css } from 'styled-components';

const InputTextInner = styled.input`
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
    background-image: none;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

    &:focus {
      border-color: ${theme.forms.input_border_focus};
      outline: 0;
      box-shadow: inset 0 0.1rem 0.1rem rgba(0,0,0,.075), 0 0 0.8rem rgba(102, 175, 233, 0.6);
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

const InputText = ({ placeholder, type, isSmall, isReadOnly, value, onChange, onClick, onKeyDown }) => (
  <InputTextInner
    placeholder={placeholder}
    type={type}
    isSmall={isSmall}
    readOnly={isReadOnly}
    value={value}
    onChange={e => onChange(e)}
    onClick={e => onClick(e)}
    onKeyDown={e => onKeyDown(e)}
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

export default InputText;
