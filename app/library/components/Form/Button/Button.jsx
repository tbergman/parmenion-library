import React from 'react';
import styled, { css } from 'styled-components';
import tc from 'tinycolor2';
import { Link } from 'react-router';
import withTheme from '../../../../hoc/withTheme';


/* ==========================================================================
   Styles
========================================================================== */

const createButton = function (type, theme) {
  // Style settings
  const vars = (() => {
    switch (type) {
      case 1:
        return {
          background: theme.colors.primary,
          border: tc(theme.colors.primary).darken(5).toString(),
          color: 'white',
          shadow: theme.components.shadow,
        };
      case 2:
        return {
          background: theme.colors.secondary,
          border: tc(theme.colors.secondary).darken(5).toString(),
          color: 'white',
          shadow: theme.components.shadow,
        };
      case 3:
        return {
          background: theme.colors.states.danger,
          border: tc(theme.colors.states.danger).darken(5).toString(),
          color: 'white',
          shadow: theme.components.shadow,
        };
      case 4:
        return {
          background: 'white',
          border: 'transparent',
          color: theme.type.text_color,
          shadow: 'none',
        };
      default:
        return {
          background: 'white',
          border: theme.colors.gray_light,
          color: theme.type.text_color,
          shadow: theme.components.shadow,
        };
    }
  })();

  // React component based on Link
  return styled(Link)`
    ${({ isSmall, isBlock }) => css`
      display: ${isBlock ? 'block' : 'inline-block'};
      padding: ${isSmall ?
        `${theme.components.padding_small_vertical} ${theme.components.padding_small_horizontal}` :
        `${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal}`
      };
      font-size: ${isSmall ? '0.9em' : '1em'};
      border-radius: ${theme.components.border_radius};
      line-height: ${theme.type.line_height};
      border: 0.1rem solid ${vars.border};
      color: ${vars.color};
      background-color: ${vars.background};
      box-shadow: ${vars.shadow};
      margin-bottom: 0;
      background-image: none;
      font-weight: normal;
      text-decoration: none;
      text-align: center;
      vertical-align: middle;
      transition: background-color 100ms linear;
      touch-action: manipulation;
      cursor: pointer;
      white-space: nowrap;
      user-select: none;

      &:focus {
        color: ${vars.color};
        background-color: ${tc(vars.background).darken(10).toString()};
            border-color: ${tc(vars.border).darken(25).toString()};
      }

      &:hover {
        color: ${vars.color};
        background-color: ${tc(vars.background).darken(10).toString()};
            border-color: ${tc(vars.border).darken(12).toString()};
      }

      &:active {
        outline: 0;
        color: ${vars.color};
        background-color: ${tc(vars.background).darken(10).toString()};
            border-color: ${tc(vars.border).darken(12).toString()};
        &:hover,
        &:focus,
        &.focus {
          color: ${vars.color};
          background-color: ${tc(vars.background).darken(17).toString()};
              border-color: ${tc(vars.border).darken(25).toString()};
        }
      }

      &[disabled] {
        cursor: ${theme.forms.cursor_disabled};
        opacity: 0.65;
        box-shadow: none;
        &:hover,
        &:focus,
        &.focus {
          background-color: ${vars.background};
        }
      }
    `}
  `;
};


/* ==========================================================================
   React Component
========================================================================== */

export const Button = ({ theme, children, type, isSmall, isBlock, isDisabled, onClick, href, to }) => {
  const ThemedButton = createButton(type, theme);

  return (
    <ThemedButton isSmall={isSmall} isBlock={isBlock} disabled={isDisabled} onClick={onClick} href={href} to={to}>
      { children }
    </ThemedButton>
  );
};

Button.propTypes = {
  type: React.PropTypes.number,
  isSmall: React.PropTypes.bool,
  isBlock: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  href: React.PropTypes.string,
  to: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 0,
  isSmall: false,
  isBlock: false,
  isDisabled: false,
  onClick: null,
  href: null,
  to: null,
};

export default withTheme(Button);
