import React from 'react';
import styled from 'styled-components';
import withTheme from '../../../hoc/withTheme.jsx'
import styles from '../../theme/index.js';
import tc from 'tinycolor2';
import { Link } from 'react-router';


/* ==========================================================================
   Styles
========================================================================== */

const createButton = function(type, theme) {

  // Style settings
  const vars = ((type, theme) => {
    switch(type) {
      case 1:
        return {
          background: theme.colors.primary,
          border: tc(theme.colors.primary).darken(5).toString(),
          color: "white",
          shadow: "0 1px 3px rgba(0,0,0,.125)"
        } 
      case 2:
        return {
          background: theme.colors.secondary,
          border: tc(theme.colors.secondary).darken(5).toString(),
          color: "white",
          shadow: "0 1px 3px rgba(0,0,0,.125)"
        }
      case 3:
        return {
          background: theme.colors.states.danger,
          border: tc(theme.colors.states.danger).darken(5).toString(),
          color: "white",
          shadow: "0 1px 3px rgba(0,0,0,.125)"
        }
      case 4:
        return {
          background: "white",
          border: "transparent",
          color: styles.type.text_color,
          shadow: "none"
        }
      default: 
        return {
          background: "white",
          border: styles.colors.gray_light,
          color: styles.type.text_color,
          shadow: "0 1px 3px rgba(0,0,0,.125)"
        } 
      }
  })(type, theme);

  // Simplify long strings
  let padding_small = `${styles.components.padding_small_vertical} ${styles.components.padding_small_horizontal}`;
  let padding_default = `${styles.components.padding_base_vertical} ${styles.components.padding_base_horizontal}`;

  // React component based on Link
  return styled(Link)`
    display: ${ props => props.isBlock ? 'block' : 'inline-block' };
    margin-bottom: 0;
    padding: ${ props => props.isSmall ? padding_small : padding_default };
    font-size: ${ props => props.isSmall ? styles.type.font_size_small : styles.type.font_size };
    line-height: ${styles.type.line_height_computed};
    border-radius: ${styles.components.border_radius_base};
    border: 1px solid ${vars.border};
    color: ${vars.color};
    background-color: ${vars.background};
    background-image: none;
    font-weight: normal;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    box-shadow: ${vars.shadow};
    transition: background-color 100ms linear;
    touch-action: manipulation;
    cursor: pointer;
    white-space: nowrap;
    user-select: none;

    &:focus,
    &.focus {
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
      opacity: 0.65;
      box-shadow: none;
      cursor: not-allowed;
      &:hover,
      &:focus,
      &.focus {
        background-color: ${vars.background};
      }
    }
  `;
  
}


/* ==========================================================================
   React Component
========================================================================== */

class Button extends React.Component {
  render() {
    const {theme, children, type, isSmall, isBlock, isDisabled, onClick, href, to} = this.props;
    const ThemedButton = createButton(type, theme);
    return <ThemedButton isSmall={isSmall} isBlock={isBlock} disabled={isDisabled} onClick={onClick} href={href} to={to}>
      { children }
    </ThemedButton>;
  }
}

Button.propTypes = {
  type: React.PropTypes.number,
  isSmall: React.PropTypes.bool,
  isBlock: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool
};

export default withTheme(Button);