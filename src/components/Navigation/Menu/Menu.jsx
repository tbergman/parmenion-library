import React from 'react';
import styled, { css } from 'styled-components';
import { Icon, Ripple } from '../../Decoration';

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

const IconContainer = styled.span`
  display: table-cell;
  width: 2.2rem;
  min-width: 2.2rem;
`;

const ArrowContainer = styled.span`
  display: table-cell;
  width: 2.2rem;
  min-width: 2.2rem;
  vertical-align: middle;
  text-align: right;
`;

const Label = styled.span`
  display: table-cell;
`;

const Description = styled.span`
  display: table-cell;
  font-size: 0.75em;
`;

const Link = styled.a`
  ${({ theme, isActive }) => css`
    display: table;
    width: 100%;
    padding: ${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal};
    border-bottom: 0.1rem solid ${isActive ? 'transparent' : theme.colors.gray_lighter};
    color: ${theme.type.text_color};
    background-color: ${isActive ? theme.components.active_background : 'white'};
    text-align: left;
    text-decoration: none;
    &:hover,
    &:focus {
      background-color: ${isActive ? theme.components.active_background : theme.colors.gray_lightest};
    }
  `}
`;

/** @example ./README.md#Menu */
export const Menu = props => <InnerMenu {...props} />;

/** @example ./README.md#MenuItem */
export const MenuItem = ({ children, href, to, icon, description, isActive, hasArrow, isRipple }) => {
  const InnerIcon = icon && React.cloneElement(icon, {
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
        {hasArrow && (
          <ArrowContainer>
            <Icon icon="chevronRight" size={1.25} isInverted={isActive} />
          </ArrowContainer>
        )}
        { isRipple && <Ripple /> }
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
  isRipple: React.PropTypes.bool,
};

MenuItem.defaultProps = {
  href: null,
  to: null,
  icon: null,
  description: null,
  isActive: false,
  isRipple: true,
};
