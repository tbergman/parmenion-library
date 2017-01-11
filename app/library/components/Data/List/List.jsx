import React from 'react';
import styled, { css } from 'styled-components';

const List = styled.ul`
  ${({ theme, hasBullets, isSpaced, isInline }) => css`
    margin: 0 0 ${theme.components.spacing_vertical} 0;
    padding: 0;
    padding-left: ${hasBullets ? theme.components.spacing_horizontal : 0};
    background-color: white;
    border: 0;
    > li {
      display: ${isInline ? 'inline-block' : 'list-item'};
      list-style: ${hasBullets ? 'disc' : 'none'};
      position: relative;
      padding-bottom: ${isSpaced ? theme.components.spacing_vertical : 0};
      padding-right: ${isInline && isSpaced ? theme.components.spacing_horizontal : 0};
      &:last-child {
        padding-bottom: 0;
        padding-right: 0;
      }
    }
  `}
`;

List.propTypes = {
  hasBullets: React.PropTypes.bool,
  isSpaced: React.PropTypes.bool,
  isInline: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired,
};

List.defaultProps = {
  hasBullets: false,
  isSpaced: false,
  isInline: false,
};

export default List;
