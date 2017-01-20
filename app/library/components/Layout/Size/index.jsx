import React, { PropTypes } from 'react';
import styled from 'styled-components';

const SizeStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width != null ? `${props.width}px` : 'auto'};
  height: ${props => props.height != null ? `${props.height}px` : 'auto'};
`;

export const Size = props => (
  <SizeStyle {...props} />
);

Size.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
