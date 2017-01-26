import React from 'react';
import styled, { css } from 'styled-components';
import tc from 'tinycolor2';
import { Ripple } from '../../Decoration';

const InnerRadio = styled.div`
  ${({ theme, isInline }) => css`
    display: inline-block;
    margin-right: ${parseInt(theme.components.spacing_horizontal, 10) / 2}rem
  `}
`;

const Default = styled.label`
  ${({ theme, isSmall }) => css`
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    padding: ${isSmall ?
      `${theme.components.padding_small_vertical} ${theme.components.padding_small_horizontal}` :
      `${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal}`
    };
    padding-left: 3.5rem;
    text-align: left;
    font-weight: normal;
    cursor: pointer;
    border: 0.1rem solid ${theme.forms.input_border};
    border-radius: ${theme.forms.input_border_radius};
    background-color: ${theme.forms.input_bg};
    box-shadow: ${theme.components.shadow};
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

    &:focus {
      background-color: ${tc('white').darken(6).toString()};
          border-color: ${tc(theme.colors.gray_light).darken(12).toString()};
    }

    &:hover {
      background-color: ${tc('white').darken(6).toString()};
          border-color: ${tc(theme.colors.gray_light).darken(12).toString()};
    }

    &:active {
      outline: 0;
      background-color: ${tc('white').darken(6).toString()};
          border-color: ${tc(theme.colors.gray_light).darken(12).toString()};
      &:hover,
      &:focus {
        background-color: ${tc('white').darken(10).toString()};
            border-color: ${tc(theme.colors.gray_light).darken(12).toString()};
              box-shadow: ${theme.components.shadow_large};
      }
    }

    &[disabled] {
      cursor: ${theme.forms.cursor_disabled};
      opacity: 0.65;
      box-shadow: none;
      &:hover,
      &:focus {
        background-color: 'white';
      }
    }
  `}
`;

const Success = styled(Default)`
  border-bottom: .2rem solid ${props => props.theme.colors.states.success}!important;
`;

const Warning = styled(Default)`
  border-bottom: .2rem solid ${props => props.theme.colors.states.warning}!important;
`;

const Danger = styled(Default)`
  border-bottom: .2rem solid ${props => props.theme.colors.states.danger}!important;
`;

const Neutral = styled(Default)`
  border-bottom: .2rem solid ${props => props.theme.colors.gray}!important;
`;

const Input = styled.input`
  position: absolute;
  margin-top: 0.1rem;
  margin-left: -2.5rem;
  width: 2rem;
  height: 2rem;
`;

const onRadioChange = onChangeFn => (e) => {
  if (onChangeFn != null) onChangeFn(e.target.value);
};

export const Radio = ({ children, id, name, value, checked, disabled, isSmall, isInline, isRipple, status, onChange }) => {
  const Label = (() => {
    switch (status) {
      case 1:
        return Success;
      case 2:
        return Warning;
      case 3:
        return Danger;
      case 4:
        return Neutral;
      default:
        return Default;
    }
  })();

  return (
    <InnerRadio isInline={isInline}>
      <Label htmlFor={id} isSmall={isSmall} disabled={disabled}>
        <Input type="radio" name={name} id={id} disabled={disabled} checked={checked} value={value} onChange={onRadioChange(onChange)} />
        { children }
        { isRipple && <Ripple /> }
      </Label>
    </InnerRadio>
  );
};

Radio.propTypes = {
  children: React.PropTypes.node.isRequired,
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  isSmall: React.PropTypes.bool,
  isInline: React.PropTypes.bool,
  isRipple: React.PropTypes.bool,
  status: React.PropTypes.number,
};

Radio.defaultProps = {
  isSmall: false,
  isInline: false,
  isRipple: true,
  status: 0,
};
