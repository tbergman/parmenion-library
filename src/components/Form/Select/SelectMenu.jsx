import React from 'react';
import styled, { css } from 'styled-components';

const MenuContainer = styled.div`
  ${({ theme, isOpen }) => css`
    display: block;
    position: absolute;
    left: 0;
    line-height: 2rem;
    width:100%;
    z-index: 1;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    transform: ${isOpen ? 'scaleY(1)' : 'scaleY(0)'};
    transform-origin: left top 0px;
    opacity: ${isOpen ? '1' : '0'};
    max-height: 25rem;
    overflow: auto;
    user-select: none;
    border: 0.1rem solid ${theme.forms.input_border_focus};
    border-top: none;
    margin-top: -1px;
    border-radius: 0 0 ${theme.forms.input_border_radius} ${theme.forms.input_border_radius};
    box-shadow: ${theme.components.shadow};
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
    color: ${theme.type.text_color};
    background-color: ${isActive ? theme.components.active_background : 'white'};
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: ${isActive ? theme.components.active_background : theme.colors.gray_lightest};
    }
  `}
`;

/** @private */
const Menu = props => <InnerMenu {...props} />;

/** @private */
const MenuItem = props => (
  <Item>
    <Link {...props} />
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
