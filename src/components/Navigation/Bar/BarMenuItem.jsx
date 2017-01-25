import React from 'react';
import styled from 'styled-components';
import { Ripple } from '../../Decoration';

const InnerBarMenuItem = styled.li`
  display: inline-block;
  position: relative;
  height: 6rem;
  padding: 0;
  line-height: 6rem;
  vertical-align: middle;
`;

const Link = styled.a`
  display: inline-block;
  position: relative;
  z-index: 1;
  height: 6rem;
  padding: 0 1.5rem;
  color: white;
  text-decoration: none;
  &:hover,
  &:focus {
    background: ${props => props.theme.components.active_background};
    color: ${props => props.theme.components.active_color};
    text-decoration:inherit;
  }
`;

const BarMenuItem = ({ children, href, to, isRipple }) => (
  <InnerBarMenuItem>
    <Link href={href} to={to}>
      { children }
      { isRipple && <Ripple /> }
    </Link>
  </InnerBarMenuItem>
);

BarMenuItem.propTypes = {
  children: React.PropTypes.node,
  href: React.PropTypes.string,
  to: React.PropTypes.string,
  isRipple: React.PropTypes.bool,
};

BarMenuItem.defaultProps = {
  isRipple: true,
};

export default BarMenuItem;
