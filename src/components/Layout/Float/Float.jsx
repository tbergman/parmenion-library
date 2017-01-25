import React from 'react';
import styled from 'styled-components';

const Float = styled.div`
  float: ${props => props.right ? 'right' : 'left'};
`;

Float.propTypes = {
  right: React.PropTypes.bool,
};

Float.defaultProps = {
  right: false,
};

export default Float;
