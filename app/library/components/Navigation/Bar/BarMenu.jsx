import React from 'react';
import styled from 'styled-components';
import styles from '../../../theme';
import { Link as RouterLink } from 'react-router';

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

class BarMenuItem extends React.Component {
  render() {
    const {children, href, to} = this.props;
    return (
      <Item>
        <Link href={href} to={to}>
          {children}
        </Link>
      </Item>
    );
  }
}

BarMenuItem.propTypes = {
  href: React.PropTypes.string,
  to: React.PropTypes.string
};

BarMenuItem.defaultProps = {};

export { BarMenu, BarMenuItem };