import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router';
import styles from '../../../theme';

/* ==========================================================================
   Styles
========================================================================== */

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
    background: ${styles.colors.gray_dark}
    color: white;
    text-decoration:inherit;
  }
`;

/* ==========================================================================
   React Component
========================================================================== */

const BarMenuItem = ({ children, href, to }) => (
  <Item>
    <Link href={href} to={to}>
      {children}
    </Link>
  </Item>
);

BarMenuItem.propTypes = {
  href: React.PropTypes.string,
  to: React.PropTypes.string,
};

BarMenuItem.defaultProps = {};

export { BarMenu, BarMenuItem };
