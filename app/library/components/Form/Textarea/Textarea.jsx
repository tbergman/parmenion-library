import React from 'react';
import styled from 'styled-components';
import styles from '../../../theme';

/* ==========================================================================
   Styles
========================================================================== */

const TextArea = styled.textarea`
    padding: ${styles.components.padding_base_vertical} ${styles.components.padding_base_horizontal};
    font-size: 1em;
    line-height: ${styles.type.line_height_computed};
    color: ${styles.forms.input_color};
    background-color: ${styles.forms.input_bg};
    border: 0.1rem solid ${styles.forms.input_border};
    border-radius: ${styles.forms.input_border_radius};
    box-shadow: ${styles.forms.input_inner_shadow};
    font-family: ${styles.type.font};
    display: block;
    width: 100%;
    height: auto;
    background-image: none;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    resize: vertical;

    &:focus {
      border-color: ${styles.forms.input_border_focus};
      outline: 0;
      box-shadow: inset 0 0.1rem 0.1rem rgba(0,0,0,.075), 0 0 0.8rem rgba(102, 175, 233, 0.6);
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

export const InputTextArea = ({ rows }) => (
  <TextArea rows={rows} />
);

InputTextArea.propTypes = {
  rows: React.PropTypes.number,
};

InputTextArea.defaultProps = {
  rows: 4,
};

export default InputTextArea;
