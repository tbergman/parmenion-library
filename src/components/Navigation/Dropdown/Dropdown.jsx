import React from 'react';
import styled, { css } from 'styled-components';

const InnerDropdown = styled.span`
  display: inline-block;
  position: relative;
`;

const Menu = styled.div`
  ${({ theme, isOpen, isRight }) => css`
    display: block;
    position: absolute;
    left: ${isRight ? 'auto' : '0'};
    right: ${isRight ? '0' : 'auto'};
    line-height: 2rem;
    z-index: 1;
    width:100%;
    min-width: 20rem;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    transform: ${isOpen ? 'scaleY(1)' : 'scaleY(0)'};
    transform-origin: left top 0px;
    opacity: ${isOpen ? '1' : '0'};
    box-shadow: ${theme.components.shadow_large};
  `}
`;

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { children, trigger, isRight, isHover } = this.props;
    return (
      <InnerDropdown
        onMouseEnter={isHover && (() => this.toggleMenu())}
        onMouseLeave={isHover && (() => this.toggleMenu())}
        onClick={!isHover && (() => this.toggleMenu())}
      >
        {trigger}
        <Menu isOpen={this.state.isOpen} isRight={isRight}>
          {children}
        </Menu>
      </InnerDropdown>
    );
  }
}

Dropdown.propTypes = {
  children: React.PropTypes.node.isRequired,
  trigger: React.PropTypes.node.isRequired,
  isRight: React.PropTypes.bool,
  isHover: React.PropTypes.bool,
};

Dropdown.defaultProps = {
  isRight: false,
  isHover: false,
};

export default Dropdown;
