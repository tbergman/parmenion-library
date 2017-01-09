import React from 'react';
import styled from 'styled-components';
import styles from '../../../theme';
import tc from 'tinycolor2';
import { Link as RouterLink } from 'react-router';

/* ==========================================================================
   Styles
========================================================================== */

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: white;
  border: 0;
`;

const Item = styled.li`
  position: relative;
`;

const Icon = styled.span`
  display: table-cell;
  width: 2.2rem;
  min-width: 2.2rem;
`;

const Label = styled.span`
  display: table-cell;
`;

const Description = styled.span`
  display: table-cell;
  font-size: 0.75em;
`;

const Link = styled(RouterLink)`
  display: table;
  width: 100%;
  padding: ${styles.components.padding_base_vertical} ${styles.components.padding_base_horizontal};
  border-bottom: 1px solid ${props => props.isActive ? 'transparent' : styles.colors.gray_lighter};
  color: ${props => props.isActive ? 'white' : styles.type.text_color};
  background-color: ${props => props.isActive ? styles.components.active_background : 'white'};
  text-align: left;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: ${props => props.isActive ? tc(styles.components.active_background).darken(3).toString() : styles.colors.gray_lightest};
  }

`;

/* ==========================================================================
   React Component
========================================================================== */

class MenuItem extends React.Component {
  render() {
    const {children, href, to, icon, description, isActive} = this.props;
    return (
      <Item>
        <Link href={href} to={to} isActive={isActive}>
          {icon && <Icon>{icon}</Icon> }
          <Label>
            {children}
            <Description>
              {description}
            </Description>
          </Label>
        </Link>
      </Item>
    );
  }
}

MenuItem.propTypes = {
  children: React.PropTypes.node.isRequired,
  href: React.PropTypes.string,
  to: React.PropTypes.string,
  icon: React.PropTypes.string,
  description: React.PropTypes.string,
  isActive: React.PropTypes.bool
};

MenuItem.defaultProps = {
  href: null,
  to: null,
  icon: null,
  description: null,
  isActive: false
};

export { Menu, MenuItem };
