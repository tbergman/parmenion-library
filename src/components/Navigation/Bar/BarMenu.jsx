import React from 'react';
import styled from 'styled-components';

const InnerBarMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const BarMenu = props => <InnerBarMenu {...props} />;

BarMenu.propTypes = {
  children: React.PropTypes.node.isRequired,
};

BarMenu.defaultProps = {};
