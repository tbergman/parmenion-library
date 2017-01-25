import React, { PropTypes } from 'react';
import styled from 'styled-components';

const HorizontalStyle = styled.div`
  display: flex;
  flex: 1;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
`;

function increaseValue(value, increase) {
  return `${(parseFloat(value, 10) * increase * 0.5).toFixed(2)}rem`;
}

const Cell = styled.div`
  ${props => props.fill && 'flex: 1;'};

  &:not(:last-child) {
    margin-left: ${props => props.spaceBefore ? increaseValue(props.theme.components.spacing_horizontal, props.spaceBefore) : 0};
    margin-right: ${props => props.spaceAfter ? increaseValue(props.theme.components.spacing_horizontal, props.spaceAfter) : 0};
  }
`;

export const Horizontal = props => (
  <HorizontalStyle {...props}>
    {React.Children.map(props.children, child =>
      child
      ? <Cell spaceBefore={child.props && child.props.spaceBefore} spaceAfter={(child.props && child.props.spaceAfter) || props.spaceBetween}>
        {child}
      </Cell>
      : null,
    )}
  </HorizontalStyle>
);

Horizontal.defaultProps = {
  spaceBetween: 1,
};

Horizontal.propTypes = {
  spaceBetween: PropTypes.number,
};
