import React from 'react';
import styled, { css } from 'styled-components';

const SelectInner = styled.select`
  ${({ theme, isSmall }) => css`
    padding: ${isSmall ?
      `${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal}` :
      `${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal}`
    };
    font-size: ${isSmall ? '0.9em' : '1em'};
    color: ${theme.forms.input_color};
    background-color: ${theme.forms.input_bg};
    border: 0.1rem solid ${theme.forms.input_border};
    border-radius: ${theme.forms.input_border_radius};
    box-shadow: ${theme.forms.input_inner_shadow};
    line-height: ${theme.type.line_height};
    display: block;
    width: 100%;
    height: auto;
    background-image: none;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

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

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { children, isSmall } = this.props;
    return (
      <SelectInner
        value={this.state.value}
        onChange={e => this.onChange(e)}
        isSmall={isSmall}
      >
        { children }
      </SelectInner>
    );
  }
}

Select.propTypes = {
  children: React.PropTypes.node.isRequired,
  isSmall: React.PropTypes.bool,
};

Select.defaultProps = {
  isSmall: false,
};

export default Select;
