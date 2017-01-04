import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import styles from '../../../theme';


/* ==========================================================================
   Styles
========================================================================== */

const Container = styled.div`
  margin: 0;
  background-color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.type.font_heading};
  box-shadow: ${styles.components.shadow};
`;

/* ==========================================================================
   React Component
========================================================================== */

class Bar extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <Container>
        {children}
      </Container>
    );
  }
}

Bar.propTypes = {
  children: React.PropTypes.node.isRequired
};

Bar.defaultProps = {};

export default Bar;