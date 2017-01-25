import React from 'react';
import styled, { css } from 'styled-components';

const InnerTextArea = styled.textarea`
  ${({ theme }) => css`
    padding: ${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal};
    font-size: 1em;
    line-height: inherit;
    color: ${theme.forms.input_color};
    background-color: ${theme.forms.input_bg};
    border: 0.1rem solid ${theme.forms.input_border};
    border-radius: ${theme.forms.input_border_radius};
    box-shadow: ${theme.forms.input_inner_shadow};
    font-family: ${theme.type.font};
    display: block;
    width: 100%;
    height: auto;
    background-image: none;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    resize: vertical;

    &:focus {
      border-color: ${theme.forms.input_border_focus};
      outline: 0;
      box-shadow: inset 0 0.1rem 0.1rem rgba(0,0,0,.075), 0 0 0.8rem rgba(102, 175, 233, 0.6);
    }

    &[disabled],
    &[readonly] {
        background-color: ${theme.forms.input_bg_disabled};
        opacity: 1;
    }
    &[disabled] {
        cursor: ${theme.forms.cursor_disabled};
    }
  `}
`;

const TextArea = props => <InnerTextArea {...props} />;

TextArea.propTypes = {
  rows: React.PropTypes.number,
};

TextArea.defaultProps = {
  rows: 4,
};

export default TextArea;
