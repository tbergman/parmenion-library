import React from 'react';
import styled, { css } from 'styled-components';
import tc from 'tinycolor2';
import { Ripple } from '../../Decoration';

const InnerCheckbox = styled.div`
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
    transition: background-color 100ms linear;

    &:hover {
      background-color: ${tc('white').darken(10).toString()};
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
  border-bottom: .2rem solid ${props => props.theme.colors.states.success};
`;

const Warning = styled(Default)`
  border-bottom: .2rem solid ${props => props.theme.colors.states.warning};
`;

const Danger = styled(Default)`
  border-bottom: .2rem solid ${props => props.theme.colors.states.danger};
`;

const Neutral = styled(Default)`
  border-bottom: .2rem solid ${props => props.theme.colors.gray};
`;

const Input = styled.input`
  position: absolute;
  margin-top: 0.1rem;
  margin-left: -2.5rem;
  width: 2rem;
  height: 2rem;
`;

const Checkbox = ({ children, id, name, value, checked, disabled, isSmall, isInline, isRipple, status, onChange }) => {
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
    <InnerCheckbox isInline={isInline}>
      <Label htmlFor={id} isSmall={isSmall} disabled={disabled}>
        <Input type="checkbox" name={name} id={id} disabled={disabled} checked={checked} onChange={onChange} />
        { children }
        { isRipple && <Ripple /> }
      </Label>
    </InnerCheckbox>
  );
};

Checkbox.propTypes = {
  children: React.PropTypes.node.isRequired,
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  isSmall: React.PropTypes.bool,
  isInline: React.PropTypes.bool,
  isRipple: React.PropTypes.bool,
  status: React.PropTypes.number,
  checked: React.PropTypes.bool,
};

Checkbox.defaultProps = {
  isSmall: false,
  isInline: false,
  isRipple: true,
  status: 0,
};

export default Checkbox;
