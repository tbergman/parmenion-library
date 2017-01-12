import React from 'react';
import styled from 'styled-components';

const Visible = styled.div`
  display: none;
  @media (min-width: ${props => props.lower}) and (max-width: ${props => props.upper}) {
    display: block;
  }
`;

Visible.propTypes = {
  lower: React.PropTypes.string,
  upper: React.PropTypes.string,
};

Visible.defaultProps = {
  lower: '0px',
  upper: '999999px',
};

export default Visible;
