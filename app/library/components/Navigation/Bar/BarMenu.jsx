import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router';
import { Dropdown } from '../Dropdown';

const BarMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  display: inline-block;
  position: relative;
  height: 6rem;
  padding: 0;
  line-height: 6rem;
  vertical-align: middle;
`;

const Link = styled(RouterLink)`
  display: inline-block;
  position: relative;
  z-index: 1;
  height: 6rem;
  padding: 0 1.5rem;
  color: white;
  text-decoration: none;
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.gray_dark};
    color: white;
    text-decoration:inherit;
  }
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

const BarMenuItem = ({ children, href, to, menu }) => {
  if (menu) {
    return (
      <Item>
        <Dropdown
          trigger={
            <Trigger>{ children }</Trigger>
          }
        >
          { menu }
        </Dropdown>
      </Item>
    );
  }
  return (
    <Item>
      <Link href={href} to={to}>
        { children }
      </Link>
    </Item>
  );
};

BarMenuItem.propTypes = {
  href: React.PropTypes.string,
  to: React.PropTypes.string,
  menu: React.PropTypes.node,
  children: React.PropTypes.node,
};

BarMenuItem.defaultProps = {
  isStatic: false,
};

export { BarMenu, BarMenuItem };
