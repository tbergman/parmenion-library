import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from '../../Navigation';
import { Icon } from '../../Decoration';

// increase margin and then negate it to create a larger hit box for the icon
const Container = styled.div`
  padding: 10px;
  margin: -10px;
`;

export const IconButton = props => (
  <TouchableOpacity onPress={props.onPress}>
    <Container>
      <Icon {...props} />
    </Container>
  </TouchableOpacity>
);
