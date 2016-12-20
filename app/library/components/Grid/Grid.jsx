/**
 * Custom container for hedron grid
 * https://github.com/JSBros/hedron
 */

import React from 'react';
import styled from 'styled-components';
import styles from '../../theme/index.js';

const GridOuter = styled.div`
  width: 100%;
  overflow: hidden;
`;

const GridInner = styled.div`
  margin: 0 -${parseInt(styles.components.spacing_horizontal,10)/2}px;
`;

class Grid extends React.Component {
  render() {    
    const {children} = this.props;
    return <GridOuter>
      <GridInner>
        { children }
      </GridInner>
    </GridOuter>;
  }
}

export default Grid;