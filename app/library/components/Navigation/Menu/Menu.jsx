import React from 'react';
import styled, { css } from 'styled-components';
import tc from 'tinycolor2';
import { Link as RouterLink } from 'react-router';

const MenuStyle = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: white;
  border: 0;
`;

const Item = styled.li`
  position: relative;
`;

const IconContainer = styled.span`
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
  ${({ theme, isActive }) => css`
    display: table;
    width: 100%;
    padding: ${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal};
    border-bottom: 1px solid ${isActive ? 'transparent' : theme.colors.gray_lighter};
    color: ${isActive ? 'white' : theme.type.text_color};
    background-color: ${isActive ? theme.components.active_background : 'white'};
    text-align: left;
    text-decoration: none;
    &:hover,
    &:focus {
      background-color: ${isActive ? tc(theme.components.active_background).darken(3).toString() : theme.colors.gray_lightest};
    }
  `}
`;

/** @example ./README.md#Menu */
const Menu = props => <MenuStyle {...props} />;

/** @example ./README.md#MenuItem */
const MenuItem = ({ children, href, to, icon, description, isActive }) => {
  const InnerIcon = icon && React.cloneElement(icon, {
    isInverted: isActive,
    size: 0.8,
  });

  return (
    <Item>
      <Link href={href} to={to} isActive={isActive}>
        {icon && <IconContainer>{InnerIcon}</IconContainer> }
        <Label>
          {children}
          <Description>
            {description}
          </Description>
        </Label>
      </Link>
    </Item>
  );
};

MenuItem.propTypes = {
  children: React.PropTypes.node.isRequired,
  href: React.PropTypes.string,
  to: React.PropTypes.string,
  icon: React.PropTypes.node,
  description: React.PropTypes.string,
  isActive: React.PropTypes.bool,
};

MenuItem.defaultProps = {
  href: null,
  to: null,
  icon: null,
  description: null,
  isActive: false,
};

export { Menu, MenuItem };
