import React from 'react';
import styled, { css } from 'styled-components';
import { filter } from 'fuzzaldrin';
import { InputText } from '../InputText';
import { MenuContainer, Menu, MenuItem } from './SelectMenu';

const InnerSelect = styled.div`
  ${({ theme, isAutocomplete }) => css`
    position: relative;

    &:focus {
      outline: none;
    }

    ${!isAutocomplete && `&:after {
      content: "▼";
      position: absolute;
      right: ${theme.components.padding_base_horizontal};
      top: 50%;
      margin-top: -0.8rem;
      color: ${theme.type.text_color};
      font-size: 0.8em;
    }`}
  `}
`;

const InnerInput = styled.div`
  ${({ theme, isSmall, isOpen }) => css`
    padding: ${isSmall ?
      `${theme.components.padding_small_vertical} ${theme.components.padding_small_horizontal}` :
      `${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal}`
    };
    font-size: ${isSmall ? '0.9em' : '1em'};
    color: ${theme.forms.input_color};
    background-color: ${theme.forms.input_bg};
    border: 0.1rem solid ${theme.forms.input_border};
    border-radius: ${theme.forms.input_border_radius};
    box-shadow: ${theme.forms.input_inner_shadow};
    line-height: ${theme.type.line_height};
    width: 100%;
    min-height: ${theme.components.input_height}; /* IE and Firefox require height */
    background-image: none;
    transition: border-color cubic-bezier(0.23, 1, 0.32, 1) .15s, box-shadow cubic-bezier(0.23, 1, 0.32, 1) .15s;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;

    padding-right: 30px; /* for select arrow */

    ${isOpen && `
      border-color: ${theme.forms.input_border_focus};
      outline: 0;
      border-bottom-color: white;
      border-radius: ${theme.forms.input_border_radius} ${theme.forms.input_border_radius} 0 0;
    `}

    &:focus {
      outline: none;
    }

    &[disabled] {
        background-color: ${theme.forms.input_bg_disabled};
        opacity: 1;
        cursor: ${theme.forms.cursor_disabled};
    }

    &[readonly] {
        cursor: pointer;
    }
  `}
`;

export class Select extends React.Component {

  constructor(props) {
    super(props);

    const selectedItem = props.value != null ? this.props.items.find(item => item.id === props.value) : null;
    this.state = { isOpen: false, currentName: selectedItem != null ? selectedItem.name : null };
  }

  componentWillReceiveProps(nextProps) {
    const selectedItem = this.props.items.find(item => item.id === nextProps.value);

    if (selectedItem) {
      this.setState({ currentName: selectedItem.name });
    }
  }

  onSearch = (e) => {
    this.setState({ currentName: e.target.value });
  }

  onBlur = (e) => {
    // don't blur dropdown if user is dragging mouse over dropdown items
    if (this.isMousePressed) {
      e.preventDefault();
      return;
    }

    this.setState({ isOpen: false });
    this.isMousePressed = false;
  }

  onMouseDown = () => {
    this.isMousePressed = true;
  }

  onMouseUp = () => {
    this.isMousePressed = false;
  }

  getFilteredItems = () => {
    const { items, isAutocomplete } = this.props;

    if (!isAutocomplete || this.state.currentName === '') {
      return items;
    }

    return filter(items, this.state.currentName, { key: 'name' });
  }

  selectItem = (item) => {
    if (this.props.onChange) {
      this.props.onChange(item.id);
    }

    this.setState({ isOpen: false, temporarySelectedId: null });
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  moveSelection = (e) => {
    e.preventDefault();
    const items = this.getFilteredItems();
    const itemsLength = items.length;
    if (!itemsLength) return;

    const selectedId = this.state.temporarySelectedId != null
      ? this.state.temporarySelectedId
      : this.props.value;
    const itemArrayIndex = items.findIndex(x => x.id === selectedId);

    const selectedItemIndex = (() => {
      if (e.key === 'ArrowDown') {
        return (itemArrayIndex === itemsLength - 1) ? 0 : itemArrayIndex + 1;
      }
      return (itemArrayIndex <= 0) ? itemsLength - 1 : itemArrayIndex - 1;
    })();

    this.setState({
      temporarySelectedId: items[selectedItemIndex].id,
    });
  }

  applySelection = (e) => {
    e.preventDefault();

    if (this.state.temporarySelectedId != null) {
      this.selectItem(this.props.items.find(item => item.id === this.state.temporarySelectedId));
    }
  }

  handleKeyDown = (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      this.moveSelection(e);
      this.setState({ isOpen: true });
    } else if (e.key === 'Enter') {
      this.applySelection(e);
    } else if (e.key === 'Escape') {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  }

  render() {
    const { placeholder, isSmall, isAutocomplete, id } = this.props;

    const selectedId = this.state.temporarySelectedId != null
      ? this.state.temporarySelectedId
      : this.props.value;

    const items = this.getFilteredItems();
    const itemsToRender = items.map((item, index) => (
      <MenuItem
        isActive={item.id === selectedId}
        key={item.id}
        onClick={this.selectItem.bind(this, item)}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
      >
        {item.name}
      </MenuItem>
    ));

    const inputProps = {
      isSmall,
      onClick: this.toggleMenu,
      onKeyDown: this.handleKeyDown,
      onBlur: this.onBlur,
    };

    const backingInput = isAutocomplete
      ? (
        <InputText
          {...inputProps}
          placeholder={placeholder}
          onChange={this.onSearch}
          value={this.state.currentName}
          _attachedDropdownIsOpen={this.state.isOpen}
        />
      )
      : (
        <InnerInput
          {...inputProps}
          tabIndex={0}
          isOpen={this.state.isOpen}
        >
          {this.state.currentName}
        </InnerInput>
      );

    return (
      <InnerSelect isAutocomplete={isAutocomplete}>
        <input type="hidden" value={this.props.value} id={id} />
        {backingInput}
        <MenuContainer isOpen={this.state.isOpen}>
          <Menu>
            { itemsToRender }
          </Menu>
        </MenuContainer>
      </InnerSelect>
    );
  }
}

Select.propTypes = {
  id: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  isSmall: React.PropTypes.bool,
  isAutocomplete: React.PropTypes.bool,
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

Select.defaultProps = {
  id: null,
  placeholder: null,
  isSmall: false,
  isAutocomplete: false,
};
