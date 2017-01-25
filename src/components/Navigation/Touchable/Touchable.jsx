import React from 'react';
import styled from 'styled-components';

const TouchableOpacityStyle = styled.div`
  transition: opacity 150ms;
  cursor: pointer;
  user-select: none;

  &:active {
    opacity: 0.5;
  }
`;

export const TouchableOpacity = props => (
  <TouchableOpacityStyle onClick={props.onClick} role="button">
    {props.children}
  </TouchableOpacityStyle>
);
