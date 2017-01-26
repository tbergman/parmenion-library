import React from 'react';
import styled, { css } from 'styled-components';
import tc from 'tinycolor2';
import { Ripple } from '../../Decoration';

const Default = styled.a`
  ${({ theme, isSmall, isBlock }) => css`
    position: relative;
    display: ${isBlock ? 'block' : 'inline-block'};
    padding: ${isSmall ?
      `${theme.components.padding_small_vertical} ${theme.components.padding_small_horizontal}` :
      `${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal}`
    };
    font-size: ${isSmall ? '0.9em' : '1em'};
    border-radius: ${theme.components.border_radius};
    line-height: ${theme.type.line_height};
    border: 0.1rem solid ${theme.colors.gray_light};
    color: ${theme.type.text_color};
    background-color: white;
    box-shadow: ${theme.components.shadow};
    margin-bottom: 0;
    background-image: none;
    font-weight: normal;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    touch-action: manipulation;
    cursor: pointer;
    white-space: nowrap;
    user-select: none;

    &:focus {
      background-color: ${tc('white').darken(6).toString()};
          border-color: ${tc(theme.colors.gray_light).darken(25).toString()};
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
            border-color: ${tc(theme.colors.gray_light).darken(25).toString()};
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

const Primary = styled(Default)`
  ${({ theme }) => css`
    color: white;
    border-color: ${tc(theme.colors.actions.primary).darken(5).toString()};
    background-color: ${theme.colors.actions.primary};
    &:focus {
      background-color: ${tc(theme.colors.actions.primary).darken(10).toString()};
          border-color: ${tc(theme.colors.actions.primary).darken(30).toString()};
    }
    &:hover {
      background-color: ${tc(theme.colors.actions.primary).darken(10).toString()};
          border-color: ${tc(theme.colors.actions.primary).darken(17).toString()};
    }
    &:active {
      background-color: ${tc(theme.colors.actions.primary).darken(10).toString()};
          border-color: ${tc(theme.colors.actions.primary).darken(17).toString()};
      &:hover,
      &:focus {
        background-color: ${tc(theme.colors.actions.primary).darken(17).toString()};
            border-color: ${tc(theme.colors.actions.primary).darken(30).toString()};
      }
    }
    &[disabled] {
      &:hover,
      &:focus {
        background-color: ${theme.colors.actions.primary};
      }
    }
  `}
`;

const Secondary = styled(Default)`
  ${({ theme }) => css`
    color: white;
    border-color: ${tc(theme.colors.actions.secondary).darken(5).toString()};
    background-color: ${theme.colors.actions.secondary};
    &:focus {
      background-color: ${tc(theme.colors.actions.secondary).darken(10).toString()};
          border-color: ${tc(theme.colors.actions.secondary).darken(30).toString()};
    }
    &:hover {
      background-color: ${tc(theme.colors.actions.secondary).darken(10).toString()};
          border-color: ${tc(theme.colors.actions.secondary).darken(17).toString()};
    }
    &:active {
      background-color: ${tc(theme.colors.actions.secondary).darken(10).toString()};
          border-color: ${tc(theme.colors.actions.secondary).darken(17).toString()};
      &:hover,
      &:focus {
        background-color: ${tc(theme.colors.actions.secondary).darken(17).toString()};
            border-color: ${tc(theme.colors.actions.secondary).darken(30).toString()};
      }
    }
    &[disabled] {
      &:hover,
      &:focus {
        background-color: ${theme.colors.actions.secondary};
      }
    }
  `}
`;

const Danger = styled(Default)`
  ${({ theme }) => css`
    color: white;
    border-color: ${tc(theme.colors.states.danger).darken(5).toString()};
    background-color: ${theme.colors.states.danger};
    &:focus {
      background-color: ${tc(theme.colors.states.danger).darken(10).toString()};
          border-color: ${tc(theme.colors.states.danger).darken(30).toString()};
    }
    &:hover {
      background-color: ${tc(theme.colors.states.danger).darken(10).toString()};
          border-color: ${tc(theme.colors.states.danger).darken(17).toString()};
    }
    &:active {
      background-color: ${tc(theme.colors.states.danger).darken(10).toString()};
          border-color: ${tc(theme.colors.states.danger).darken(17).toString()};
      &:hover,
      &:focus {
        background-color: ${tc(theme.colors.states.danger).darken(17).toString()};
            border-color: ${tc(theme.colors.states.danger).darken(30).toString()};
      }
    }
    &[disabled] {
      &:hover,
      &:focus {
        background-color: ${theme.colors.states.danger};
      }
    }
  `}
`;

const LinkButton = styled(Default)`
  ${({ theme }) => css`
    color: ${theme.type.text_color};
    border-color: transparent;
    background-color: white;
    box-shadow: none;
    &:focus {
      background-color: ${tc('white').darken(10).toString()};
          border-color: transparent;
    }
    &:hover {
      background-color: ${tc('white').darken(10).toString()};
          border-color: transparent;
    }
    &:active {
      background-color: ${tc('white').darken(10).toString()};
          border-color: transparent;
      &:hover,
      &:focus {
        background-color: ${tc('white').darken(17).toString()};
            border-color: transparent;
              box-shadow: none;
      }
    }
    &[disabled] {
      &:hover,
      &:focus {
        background-color: white;
      }
    }
  `}
`;

const InnerButtonIcon = styled.div`
  ${({ theme, isSmall, isRight }) => css`
    position: relative;
    float: ${isRight ? 'right' : 'left'};
    margin-left: ${isRight ?
      `${(parseFloat(isSmall ? theme.components.padding_small_horizontal : theme.components.padding_base_horizontal, 10) / 3).toFixed(2)}rem` :
      `-${(parseFloat(isSmall ? theme.components.padding_small_horizontal : theme.components.padding_base_horizontal, 10) / 3).toFixed(2)}rem`
    };
    margin-right: ${isRight ?
      `-${(parseFloat(isSmall ? theme.components.padding_small_horizontal : theme.components.padding_base_horizontal, 10) / 3).toFixed(2)}rem` :
      `${(parseFloat(isSmall ? theme.components.padding_small_horizontal : theme.components.padding_base_horizontal, 10) / 3).toFixed(2)}rem`
    };
  `}
`;

export const Button = ({ theme, children, type, isSmall, isBlock, isDisabled, isRipple, onClick, href, to, icon, iconRight }) => {
  const InnerButton = (() => {
    switch (type) {
      case 1:
        return Primary;
      case 2:
        return Secondary;
      case 3:
        return Danger;
      case 4:
        return LinkButton;
      default:
        return Default;
    }
  })();

  const ButtonIcon = icon && <InnerButtonIcon isSmall={isSmall} isRight={iconRight}>
    { icon }
  </InnerButtonIcon>;

  return (
    <InnerButton isSmall={isSmall} isBlock={isBlock} disabled={isDisabled} isRipple={isRipple} onClick={onClick} href={href} to={to}>
      { children }
      { ButtonIcon }
      { isRipple && <Ripple /> }
    </InnerButton>
  );
};

Button.propTypes = {
  type: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  isSmall: React.PropTypes.bool,
  isBlock: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool,
  isRipple: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  href: React.PropTypes.string,
  to: React.PropTypes.string,
  icon: React.PropTypes.node,
  iconRight: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 0,
  isSmall: false,
  isBlock: false,
  isDisabled: false,
  isRipple: true,
  onClick: null,
  href: null,
  to: null,
  icon: null,
  iconRight: false,
};
