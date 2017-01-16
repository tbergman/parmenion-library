import React from 'react';
import styled from 'styled-components';

const StackedStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Cell = styled.div`
  &:not(:last-child) {
    margin-top: ${props => props.theme.layout.push(props.spaceBefore || 0)};
    margin-bottom: ${props => props.theme.layout.push(props.spaceAfter || 1)};
  }
`;

export const Stacked = props => (
  <StackedStyle {...props}>
    {React.Children.map(props.children, child =>
      <Cell spaceBefore={child.props.spaceBefore} spaceAfter={child.props.spaceAfter}>
        {child}
      </Cell>,
    )}
  </StackedStyle>
);
