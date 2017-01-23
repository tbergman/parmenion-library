import React from 'react';
import styled, { css } from 'styled-components';
import { filter } from 'fuzzaldrin';
import { InputText } from '../InputText';
import { MenuContainer, Menu, MenuItem } from './SelectMenu';

const InnerSelect = styled.div`
  ${({ theme, isAutocomplete }) => css`
    position: relative;
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

class Select extends React.Component {

  constructor(props) {
    super(props);

    const selectedItem = props.value ? this.props.items.find(item => item.id === props.value) : null;
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
    } else if (e.key === 'Enter') {
      this.applySelection(e);
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

    return (
      <InnerSelect isAutocomplete={isAutocomplete}>
        <input type="hidden" value={this.props.value} id={id} />
        <InputText
          placeholder={placeholder}
          isSmall={isSmall}
          value={this.state.currentName}
          isReadOnly={!isAutocomplete}
          onChange={this.onSearch}
          onClick={this.toggleMenu}
          onKeyDown={this.handleKeyDown}
          onBlur={this.onBlur}
        />
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
  items: React.PropTypes.array.isRequired,
};

Select.defaultProps = {
  id: null,
  placeholder: null,
  isSmall: false,
  isAutocomplete: false,
};

export default Select;
