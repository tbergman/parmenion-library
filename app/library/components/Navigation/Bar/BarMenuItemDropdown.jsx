import React from 'react';
import styled from 'styled-components';
import { Dropdown } from '../Dropdown';

const InnerBarMenuItem = styled.li`
  display: inline-block;
  position: relative;
  height: 6rem;
  padding: 0;
  line-height: 6rem;
  vertical-align: middle;
`;

const Trigger = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;
  height: 6rem;
  padding: 0;
  color: white;
  text-decoration: none;
  padding: 0 1.5rem;
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.gray_dark};
    color: white;
    text-decoration:inherit;
  }
`;

const BarMenuItemDropdown = ({ children, menu, isHover, isRight }) => (
  <InnerBarMenuItem>
    <Dropdown
      isHover={isHover}
      isRight={isRight}
      trigger={
        <Trigger>{ children }</Trigger>
      }
    >
      { menu }
    </Dropdown>
  </InnerBarMenuItem>
);

BarMenuItemDropdown.propTypes = {
  children: React.PropTypes.node,
  menu: React.PropTypes.node,
  isHover: React.PropTypes.bool,
  isRight: React.PropTypes.bool,
};

BarMenuItemDropdown.defaultProps = {
  isHover: false,
  isRight: false,
};

export default BarMenuItemDropdown;