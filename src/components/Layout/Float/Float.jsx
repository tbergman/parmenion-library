import React from 'react';
import styled from 'styled-components';

const InnerFloat = styled.div`
  float: ${props => props.isRight ? 'right' : 'left'};
`;

export const Float = props => <InnerFloat {...props} />;

Float.propTypes = {
  isRight: React.PropTypes.bool,
};

Float.defaultProps = {
  isRight: false,
};
