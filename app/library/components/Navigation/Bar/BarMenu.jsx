import React from 'react';
import styled from 'styled-components';

const BarMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

BarMenu.propTypes = {
  children: React.PropTypes.node.isRequired,
};

BarMenu.defaultProps = {};

export default BarMenu;
