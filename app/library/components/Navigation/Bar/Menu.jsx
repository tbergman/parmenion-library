import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import styles from '../../../theme';


/* ==========================================================================
   Styles
========================================================================== */

const Container = styled.ul`
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
    background: ${styles.colors.gray_dark}
    color: white;
    text-decoration:inherit;
  }
`;

/* ==========================================================================
   React Component
========================================================================== */

class Menu extends React.Component {
  render() {
    const {items} = this.props;
    return (
      <Container>
        {
          items.map(function(item) {
            return <Item>
              <Link href={item.location}>
                {item.content}
              </Link>
            </Item>;
          })
        }
      </Container>
    );
  }
}

Menu.propTypes = {
  items: React.PropTypes.array.isRequired
};

Menu.defaultProps = {};

export default Menu;