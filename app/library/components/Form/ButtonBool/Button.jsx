import React from 'react';
import styled from 'styled-components';
import styles from '../../../theme';
import tc from 'tinycolor2';
import { Link } from 'react-router';


/* ==========================================================================
   Styles
========================================================================== */

// React component based on Link
const Container = styled(Link)`
  display: ${ props => props.isBlock ? 'block' : 'inline-block' };
  padding: ${ props => props.isSmall ? `${styles.components.padding_small_vertical} ${styles.components.padding_small_horizontal}` : `${styles.components.padding_base_vertical} ${styles.components.padding_base_horizontal}` };
  font-size: ${ props => props.isSmall ? "0.9em" : "1em" };
  border-radius: ${styles.components.border_radius};
  line-height: ${styles.type.line_height};

  border: 0.1rem solid ${ props =>
    props.primary && tc(props.theme.colors.primary).darken(5).toString() ||
    props.secondary && tc(props.theme.colors.secondary).darken(5).toString() ||
    props.danger && tc(props.theme.colors.states.danger).darken(5).toString() ||
    props.link && "transparent" ||
    styles.colors.gray_light
  };

  color: ${ props =>
    props.primary && 'white' ||
    props.secondary && 'white' ||
    props.danger && 'white' ||
    props.link && styles.type.text_color ||
    styles.type.text_color
  };

  background-color: ${ props =>
    props.primary && props.theme.colors.primary ||
    props.secondary && props.theme.colors.secondary ||
    props.danger && props.theme.colors.states.danger ||
    props.link && 'white' ||
    'white'
  };

  box-shadow: ${ props =>
    props.primary && styles.components.shadow ||
    props.secondary && styles.components.shadow ||
    props.danger && styles.components.shadow ||
    props.link && 'none' ||
    styles.components.shadow
  };

  margin-bottom: 0;
  background-image: none;
  font-weight: normal;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  transition: background-color 100ms linear;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;

  &:focus,
  &.focus {
    color: inherit;
    background-image: linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.1));
  }

  &:hover {
    background-image: linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.1));
  }

  &:active {
    color: inherit;
    outline: 0;
    background-image: linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.1));
    &:hover,
    &:focus,
    &.focus {
      background-image: linear-gradient(to right, rgba(0,0,0,0.17), rgba(0,0,0,0.17));
    }
  }

  &[disabled] {
    cursor: ${styles.forms.cursor_disabled};
    opacity: 0.65;
    box-shadow: none;
    &:hover,
    &:focus,
    &.focus {
      background-color: inherit;
    }
  }
`;


/* ==========================================================================
   React Component
========================================================================== */

class Button extends React.Component {
  render() {
    const {children, primary, secondary, danger, link, isSmall, isBlock, isDisabled, onClick, href, to, style} = this.props;
    return <Container primary={primary} secondary={secondary} danger={danger} link={link} isSmall={isSmall} isBlock={isBlock} disabled={isDisabled} onClick={onClick} href={href} to={to} style={style}>
      { children }
    </Container>;
  }
}

Button.propTypes = {
  primary: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  danger: React.PropTypes.bool,
  link: React.PropTypes.bool,
  isSmall: React.PropTypes.bool,
  isBlock: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  href: React.PropTypes.string,
  to: React.PropTypes.string,
  children: React.PropTypes.node.isRequired
};

Button.defaultProps = {
  type: 0,
  isSmall: false,
  isBlock: false,
  isDisabled: false,
  onClick: null,
  href: null,
  to: null
};

export default Button;