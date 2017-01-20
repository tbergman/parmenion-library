import React from 'react';
import styled, { css } from 'styled-components';
import tc from 'tinycolor2';

const MenuContainer = styled.div`
  ${({ theme, isOpen }) => css`
    display: ${isOpen ? 'block' : 'none'};
    position: absolute;
    left: 0;
    line-height: 2rem;
    width:100%;
    z-index: 1;
    box-shadow: ${theme.components.shadow_large};
    max-height: 25rem;
    overflow: auto;
  `}
`;

const InnerMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: white;
  border: 0;
`;

const Item = styled.li`
  position: relative;
`;

const Link = styled.span`
  ${({ theme, isActive }) => css`
    display: block;
    width: 100%;
    padding: ${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal};
    border-bottom: 0.1rem solid ${isActive ? 'transparent' : theme.colors.gray_lighter};
    color: ${isActive ? 'white' : theme.type.text_color};
    background-color: ${isActive ? theme.components.active_background : 'white'};
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: ${isActive ? tc(theme.components.active_background).darken(3).toString() : theme.colors.gray_lightest};
    }
  `}
`;

/** @example ./README.md#Menu */
const Menu = props => <InnerMenu {...props} />;

/** @example ./README.md#MenuItem */
const MenuItem = ({ children, isActive, onMouseDown }) => (
  <Item>
    <Link isActive={isActive} onMouseDown={onMouseDown}>
      {children}
    </Link>
  </Item>
);

MenuItem.propTypes = {
  children: React.PropTypes.node.isRequired,
  isActive: React.PropTypes.bool,
  onMouseDown: React.PropTypes.func,
};

MenuItem.defaultProps = {
  isActive: false,
  onMouseDown: null,
};

export { MenuContainer, Menu, MenuItem };
