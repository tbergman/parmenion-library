import React, { PropTypes } from 'react';
import styled from 'styled-components';

const StackedStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

function increaseValue(value, increase) {
  return `${(parseFloat(value, 10) * increase).toFixed(2)}rem`;
}

const Cell = styled.div`
  &:not(:last-child) {
    margin-top: ${props => props.spaceBefore ? increaseValue(props.theme.components.spacing_vertical, props.spaceBefore) : 0};
    margin-bottom: ${props => props.spaceAfter ? increaseValue(props.theme.components.spacing_vertical, props.spaceAfter) : 0};
  }
`;

export const Stacked = props => (
  <StackedStyle {...props}>
    {React.Children.map(props.children, child =>
      child
      ? <Cell spaceBefore={child.props && child.props.spaceBefore} spaceAfter={(child.props && child.props.spaceAfter) || props.spaceBetween}>
        {child}
      </Cell>
      : null,
    )}
  </StackedStyle>
);

Stacked.defaultProps = {
  spaceBetween: 1,
};

Stacked.propTypes = {
  spaceBetween: PropTypes.number,
};
