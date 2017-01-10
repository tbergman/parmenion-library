import React from 'react';
import styled from 'styled-components';
import tc from 'tinycolor2';
import { Link } from 'react-router';
import withTheme from '../../../../hoc/withTheme';
import styles from '../../../theme';


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
          shadow: styles.components.shadow,
        };
      case 2:
        return {
          background: theme.colors.secondary,
          border: tc(theme.colors.secondary).darken(5).toString(),
          color: 'white',
          shadow: styles.components.shadow,
        };
      case 3:
        return {
          background: theme.colors.states.danger,
          border: tc(theme.colors.states.danger).darken(5).toString(),
          color: 'white',
          shadow: styles.components.shadow,
        };
      case 4:
        return {
          background: 'white',
          border: 'transparent',
          color: styles.type.text_color,
          shadow: 'none',
        };
      default:
        return {
          background: 'white',
          border: styles.colors.gray_light,
          color: styles.type.text_color,
          shadow: styles.components.shadow,
        };
    }
  })();

  // Simplify long strings
  const paddingSmall = `${styles.components.padding_small_vertical} ${styles.components.padding_small_horizontal}`;
  const paddingDefault = `${styles.components.padding_base_vertical} ${styles.components.padding_base_horizontal}`;

  // React component based on Link
  return styled(Link)`
    display: ${props => props.isBlock ? 'block' : 'inline-block'};
    padding: ${props => props.isSmall ? paddingSmall : paddingDefault};
    font-size: ${props => props.isSmall ? '0.9em' : '1em'};
    border-radius: ${styles.components.border_radius};
    line-height: ${styles.type.line_height};
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
      cursor: ${styles.forms.cursor_disabled};
      opacity: 0.65;
      box-shadow: none;
      &:hover,
      &:focus,
      &.focus {
        background-color: ${vars.background};
      }
    }
  `;
};


/* ==========================================================================
   React Component
========================================================================== */

const Button = ({ theme, children, type, isSmall, isBlock, isDisabled, onClick, href, to }) => {
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
