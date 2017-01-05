import React from 'react';
import styled from 'styled-components';


/* ==========================================================================
   Styles
========================================================================== */

const Container = styled.div`
  float: ${props => props.right ? "right" : "left"};
`;

/* ==========================================================================
   React Component
========================================================================== */

class Float extends React.Component {
  render() {
    const {children, right} = this.props;
    return (
      <Container right={right}>
        {children}
      </Container>
    );
  }
}

Float.propTypes = {
  right: React.PropTypes.bool
};

Float.defaultProps = {
  right: false
};

export default Float;