import React from 'react';
import styled from 'styled-components';
import styles from '../../theme';


/* ==========================================================================
   Styles
========================================================================== */

// Simplify long strings
let padding_small = `${styles.components.padding_small_vertical} ${styles.components.padding_small_horizontal}`;
let padding_default = `${styles.components.padding_base_vertical} ${styles.components.padding_base_horizontal}`;

const Input = styled.input`
    display: block;
    width: 100%;
    height: ${props => props.isSmall ? styles.forms.input_height_small : styles.forms.input_height_base};
    padding: ${props => props.isSmall ? padding_small : padding_default};
    font-size: ${ props => props.isSmall ? styles.type.font_size_small : styles.type.font_size };
    line-height: ${styles.type.line_height_computed};
    color: ${styles.forms.input_color};
    background-color: ${styles.forms.input_bg};
    background-image: none;
    border: 1px solid ${styles.forms.input_border};
    border-radius: ${styles.forms.input_border_radius};
    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

    &:focus {
      border-color: ${styles.colors.bright_blue};
      outline: 0;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
    }

    /* Fix: Unstyle the caret on <select>s in IE10+. */
    &::-ms-expand {
        border: 0;
        background-color: transparent;
    }

    /* Disabled and read-only inputs */
    &[disabled],
    &[readonly] {
        background-color: ${styles.forms.input_bg_disabled};
        opacity: 1;
    }
    &[disabled] {
        cursor: ${styles.forms.cursor_disabled};
    }
`;


/* ==========================================================================
   React Component
========================================================================== */

class InputText extends React.Component {
  render() {
    const {placeholder, type, isSmall} = this.props;
    return <Input placeholder={placeholder} type={type} isSmall={isSmall}/>;
  }
}

InputText.propTypes = {
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  isSmall: React.PropTypes.bool
};

InputText.defaultProps = {
  placeholder: null,
  isSmall: false,
  type: "text"
};

export default InputText;