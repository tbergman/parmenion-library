import React from 'react';
import styled from 'styled-components';

const TouchableOpacityStyle = styled.div`
  transition: opacity 150ms;
  cursor: pointer;

  &:active {
    opacity: 0.5;
  }
`;

export const TouchableOpacity = props => (
  <TouchableOpacityStyle onClick={props.onPress} role="button">
    {props.children}
  </TouchableOpacityStyle>
);
