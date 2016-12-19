import React from 'react';
import styled from 'styled-components';
import styles from '../../theme';

/* ==========================================================================
   Styles
========================================================================== */

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    height: auto;
    padding: ${styles.components.padding_base_vertical} ${styles.components.padding_base_horizontal};
    font-size: ${styles.type.font_size};
    line-height: ${styles.type.line_height_computed};
    color: ${styles.forms.input_color};
    background-color: ${styles.forms.input_bg};
    background-image: none;
    border: 1px solid ${styles.forms.input_border};
    border-radius: ${styles.forms.input_border_radius};
    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    resize: vertical;
    font-family: ${styles.type.font};

    &:focus {
      border-color: ${styles.colors.bright_blue};
      outline: 0;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
    }

    // Disabled and read-only inputs
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

class InputTextArea extends React.Component {
  render() {
    const {rows} = this.props;
    return <TextArea rows={rows} />;
  }
}

InputTextArea.propTypes = {
  rows: React.PropTypes.number
};

InputTextArea.defaultProps = {
  rows: 4
};

export default InputTextArea;