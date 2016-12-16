import React from 'react';
import styled from 'styled-components';
import withTheme from '../../../hoc/withTheme.jsx'
import styles from '../../theme/index.js';
import tinycolor from 'tinycolor2';



/* ==========================================================================
   Styles
========================================================================== */

/* Block styles
========================================================================== */

const createButton = function(color = styles.type.text_color, background = "white", border = styles.colors.gray_light) {
  return styled.a`
    display: inline-block;
    margin-bottom: 0;
    padding: ${styles.components.padding_base_vertical} ${styles.components.padding_base_horizontal};
    font-size: ${styles.type.font_size};
    line-height: ${styles.type.line_height_computed};
    border: 1px solid ${border};
    border-radius: ${styles.components.border_radius_base};
    color: ${color};
    background-color: ${background};
    background-image: none;
    font-weight: normal;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    box-shadow: 0 1px 3px rgba(0,0,0,.125);
    transition: background-color 100ms linear;
    touch-action: manipulation;
    cursor: pointer;
    white-space: nowrap;
    user-select: none;

    &:focus,
    &.focus {
      color: ${color};
      background-color: ${tinycolor(background).darken(10).toString()};
          border-color: ${tinycolor(border).darken(25).toString()};
    }

    &:hover {
      color: ${color};
      background-color: ${tinycolor(background).darken(10).toString()};
          border-color: ${tinycolor(border).darken(12).toString()};
    }

    &:active {
      outline: 0;
      color: ${color};
      background-color: ${tinycolor(background).darken(10).toString()};
          border-color: ${tinycolor(border).darken(12).toString()};
      &:hover,
      &:focus,
      &.focus {
        color: ${color};
        background-color: ${tinycolor(background).darken(17).toString()};
            border-color: ${tinycolor(border).darken(25).toString()};
      }
    }

    &[disabled] {
      opacity: 0.65;
      box-shadow: none;
      cursor: not-allowed;
      pointer-events: none;
      &:hover,
      &:focus,
      &.focus {
        background-color: ${background};
            border-color: ${border};
      }
    }
  `;
  
}


/* ==========================================================================
   React Component
========================================================================== */

class Button extends React.Component {
  render() {
    const {type, children, theme} = this.props;

    const Button = (() => {
      switch(type) {
        case 1: 
          return createButton("white",theme.colors.states.success,tinycolor(theme.colors.states.success).darken(5).toString())
        case 2: 
          return createButton("white",theme.colors.states.danger,tinycolor(theme.colors.states.danger).darken(5).toString())
        case 3: 
          return createButton("white",theme.colors.states.warning,tinycolor(theme.colors.states.warning).darken(5).toString())
        case 4: 
          return createButton("white",theme.colors.states.info,tinycolor(theme.colors.states.info).darken(5).toString())
        default: 
          return createButton();
      }
    })();
    
    return <Button>
      { children }
    </Button>;
  }
}

Button.propTypes = {
  title: React.PropTypes.string,
  status: React.PropTypes.number,
  hasArrow: React.PropTypes.bool
};
export default withTheme(Button);