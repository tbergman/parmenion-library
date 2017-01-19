import React from 'react';
import styled, { css } from 'styled-components';
import { InputText } from '../InputText';
import { Menu, MenuItem } from './AutocompleteMenu';

const InnerAutocomplete = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.forms.input_bg};
  `}
`;

const MenuContainer = styled.div`
  ${({ theme, isOpen }) => css`
    display: ${isOpen ? 'block' : 'none'};
    position: absolute;
    left: 0;
    line-height: 2rem;
    width:100%;
    z-index: 1;
    box-shadow: ${theme.components.shadow_large};
    max-height: 30rem;
    overflow: auto;
  `}
`;

class Autocomplete extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false, selectedId: 0, selectedName: null };
  }

  onSelect(item) {
    this.setState({ selectedId: item.id, selectedName: item.name });
  }

  onSearch(e) {
    const nameMatch = this.props.items.filter(item => item.name === e.target.value);
    // If only one item in list matches current search term then select it
    if (nameMatch.length === 1) {
      this.setState({ selectedId: nameMatch[0].id, selectedName: e.target.value });
    } else {
      this.setState({ selectedId: null, selectedName: e.target.value });
    }
  }

  onBlur() {
    // Wait until selection has registered before closing menu, as blur still
    // fires even if child element selected.
    // TODO: Find a better way than using setTimeout.
    const self = this;
    setTimeout(() => self.setState({ isOpen: false }), 100);
  }

  getFilteredItems() {
    const items = this.props.items;
    return items.filter(item => (!this.state.selectedName || item.name.search(this.state.selectedName) !== -1));
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  moveSelection(e) {
    e.preventDefault();
    const items = this.getFilteredItems();
    const itemsLength = items.length;
    if (!itemsLength) return;
    const itemArrayIndex = items.findIndex(x => x.id === this.state.selectedId);

    const selectedItemIndex = (() => {
      if (e.key === 'ArrowDown') {
        return (itemArrayIndex === itemsLength - 1) ? 0 : itemArrayIndex + 1;
      }
      return (itemArrayIndex <= 0) ? itemsLength - 1 : itemArrayIndex - 1;
    })();

    this.setState({
      selectedId: items[selectedItemIndex].id,
      isOpen: true,
    });
  }

  applySelection(e) {
    e.preventDefault();
    const items = this.getFilteredItems();
    const itemsLength = items.length;
    if (!itemsLength) return;
    const itemArrayIndex = items.findIndex(x => x.id === this.state.selectedId);

    this.setState({
      selectedId: items[itemArrayIndex].id,
      selectedName: items[itemArrayIndex].name,
      isOpen: false,
    });
  }

  handleKeyDown(e) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      this.moveSelection(e);
    } else if (e.key === 'Enter') {
      this.applySelection(e);
    } else {
      this.setState({ isOpen: true });
    }
  }

  render() {
    const { placeholder, isSmall } = this.props;

    const items = this.getFilteredItems();
    const itemsToRender = items.map((item, index) => (
      <MenuItem isActive={item.id === this.state.selectedId} key={item.id} onClick={() => this.onSelect(item)}>
        {item.name}
      </MenuItem>
    ));

    return (
      <InnerAutocomplete onBlur={() => this.onBlur()}>
        <input type="hidden" value={this.state.selectedId} />
        <InputText
          placeholder={placeholder}
          isSmall={isSmall}
          value={this.state.selectedName}
          onChange={e => this.onSearch(e)}
          onClick={() => this.toggleMenu()}
          onKeyDown={e => this.handleKeyDown(e)}
        />
        <MenuContainer isOpen={this.state.isOpen}>
          <Menu>
            { itemsToRender }
          </Menu>
        </MenuContainer>
      </InnerAutocomplete>
    );
  }
}


Autocomplete.propTypes = {
  placeholder: React.PropTypes.string,
  isSmall: React.PropTypes.bool,
  items: React.PropTypes.array.isRequired,
};

Autocomplete.defaultProps = {
  placeholder: null,
  isSmall: false,
};

export default Autocomplete;
