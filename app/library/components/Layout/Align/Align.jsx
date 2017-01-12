import React from 'react';
import styled from 'styled-components';

const Align = styled.div`
  text-align: ${props => () => {
    switch (props.type) {
      case 1:
        return 'left';
      case 2:
        return 'right';
      default:
        return 'center';
    }
  }
  };
`;

Align.propTypes = {
  type: React.PropTypes.number,
};

Align.defaultProps = {
  type: 1,
};

export default Align;
