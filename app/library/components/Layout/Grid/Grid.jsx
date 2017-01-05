/**
 * Custom container for hedron grid
 * https://github.com/JSBros/hedron
 */

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

class Grid extends React.Component {
  render() {    
    const {children} = this.props;
    return <Container>
      { children }
    </Container>;
  }
}

export default Grid;