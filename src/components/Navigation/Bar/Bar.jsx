import React from 'react';
import styled, { css } from 'styled-components';

const InnerBar = styled.div`
  ${({ theme }) => css`
    margin: 0;
    height: 6rem;
    background-color: ${theme.colors.primary};
    font-family: ${theme.type.font_heading};
    box-shadow: ${theme.components.shadow};
  `}
`;

export const Bar = props => <InnerBar {...props} />;

Bar.propTypes = {
  children: React.PropTypes.node.isRequired,
};

Bar.defaultProps = {};
