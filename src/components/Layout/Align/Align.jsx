import React from 'react';
import styled from 'styled-components';

const InnerAlign = styled.div`
  text-align: ${props => () => {
    switch (props.type) {
      case 1:
        return 'left';
      case 2:
        return 'right';
      case 3:
      default:
        return 'center';
    }
  }
  };
`;

export const Align = props => <InnerAlign {...props} />;

Align.propTypes = {
  type: React.PropTypes.number,
};

Align.defaultProps = {
  type: 1,
};
