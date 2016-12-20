import React from 'react';
import styled from 'styled-components';
import styles from '../../../theme';


/* ==========================================================================
   Styles
========================================================================== */

// Simplify long strings
let padding_small = `${styles.components.padding_small_vertical} ${styles.components.padding_small_horizontal}`;
let padding_default = `${styles.components.padding_base_vertical} ${styles.components.padding_base_horizontal}`;

const Input = styled.input`
    padding: ${props => props.isSmall ? padding_small : padding_default};
    font-size: ${ props => props.isSmall ? "0.9rem" : "1rem" };
    color: ${styles.forms.input_color};
    background-color: ${styles.forms.input_bg};
    border: 1px solid ${styles.forms.input_border};
    border-radius: ${styles.forms.input_border_radius};
    box-shadow: ${styles.forms.input_inner_shadow};
    display: block;
    width: 100%;
    background-image: none;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

    &:focus {
      border-color: ${styles.forms.input_border_focus};
      outline: 0;
      box-shadow: inset 0 0.1rem 0.1rem rgba(0,0,0,.075), 0 0 0.6rem rgba(102, 175, 233, 0.6);
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