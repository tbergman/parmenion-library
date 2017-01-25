import React from 'react';
import styled from 'styled-components';

const InnerFloat = styled.div`
  float: ${props => props.isRight ? 'right' : 'left'};
`;

const Float = props => <InnerFloat {...props} />;

Float.propTypes = {
  isRight: React.PropTypes.bool,
};

Float.defaultProps = {
  isRight: false,
};

export default Float;
