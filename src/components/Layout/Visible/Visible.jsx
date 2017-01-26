import React from 'react';
import styled from 'styled-components';

const InnerVisible = styled.div`
  display: none;
  @media (min-width: ${props => props.lower}) and (max-width: ${props => props.upper}) {
    display: block;
  }
`;

export const Visible = props => <InnerVisible {...props} />;

Visible.propTypes = {
  lower: React.PropTypes.string,
  upper: React.PropTypes.string,
};

Visible.defaultProps = {
  lower: '0px',
  upper: '999999px',
};
