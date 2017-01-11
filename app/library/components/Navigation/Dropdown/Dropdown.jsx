import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const Menu = styled.div`
  ${({ theme, isOpen, isRight }) => css`
    display: ${isOpen ? 'block' : 'none'};
    position: absolute;
    left: ${isRight ? 'auto' : '0'};
    right: ${isRight ? '0' : 'auto'};
    z-index: 1;
    width:100%;
    min-width: 20rem;
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
    const { children, trigger, isRight } = this.props;
    return (
      <Container>
        {React.cloneElement(trigger, { onClick: () => this.toggleMenu() })}
        <Menu isOpen={this.state.isOpen} isRight={isRight}>
          {children}
        </Menu>
      </Container>
    );
  }
}

Dropdown.propTypes = {
  children: React.PropTypes.node.isRequired,
  trigger: React.PropTypes.node.isRequired,
  isRight: React.PropTypes.bool,
};

Dropdown.defaultProps = {
  isRight: false,
};

export default Dropdown;
