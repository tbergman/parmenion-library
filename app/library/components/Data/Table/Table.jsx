import React from 'react';
import styled, { css } from 'styled-components';
import tinycolor from 'tinycolor2';

const Container = styled.div`
  ${({ theme, breakpoint }) => css`
    overflow-x: auto;
    min-height: 0.01%;
    margin-bottom: ${theme.components.spacing_vertical};
    @media screen and (max-width: ${breakpoint ? `${breakpoint}px` : theme.breakpoints.xs_max}) {
      width: 100%;
      overflow-y: hidden;
      -ms-overflow-style: -ms-autohiding-scrollbar;
      border: 1px solid ${theme.components.border_color};
      > table {
        margin-bottom: 0;
        > thead,
        > tbody,
        > tfoot {
          > tr {
            > th,
            > td {
              white-space: nowrap;
            }
          }
        }
      }
    }
  `}
`;

const InnerTable = styled.table`
  ${({ theme, isLight, isHover, isStriped }) => css`
    width: 100%;
    max-width: 100%;
    border: ${isLight ? 'none' : `1px solid ${theme.components.border_color}`};
    border-collapse: collapse;
    border-spacing: 0;
    th, td {
      position: relative;
      padding: ${theme.components.cell_padding};
      border-top: ${isLight ? 'none' : `1px solid ${theme.components.border_color}`};
      border-bottom: ${isLight ? `1px solid ${theme.components.border_color}` : 'none'};
      vertical-align: top;
      text-align: left;
    }
    > thead {
      background-color: ${isLight ? 'none' : `${theme.colors.gray_lightest}`};
      > tr > th {
        vertical-align: middle;
        border-bottom: 1px solid ${theme.components.border_color};
      }
      &:first-child {
        > tr:first-child {
          > th,
          > td {
            border-top: 0;
          }
        }
      }
    }
    > tbody {
      border-top: ${isLight ? `1px solid ${theme.components.border_color}` : 'none'};
    }
    ${isStriped &&
      `> tbody > tr:nth-of-type(odd) {
        background-color: ${tinycolor(theme.colors.gray_lightest).lighten(1).toString()};
      }`
    }
    ${isHover &&
      `> tbody > tr:hover {
        transition: background-color 100ms linear;
        background-color: ${theme.colors.gray_lightest};
      }`
    }
  `}
`;

const Table = ({ children, isLight, isHover, isStriped, breakpoint }) => (
  <Container breakpoint={breakpoint}>
    <InnerTable isLight={isLight} isHover={isHover} isStriped={isStriped}>
      { children }
    </InnerTable>
  </Container>
);

Table.propTypes = {
  isLight: React.PropTypes.bool,
  isHover: React.PropTypes.bool,
  isStriped: React.PropTypes.bool,
  breakpoint: React.PropTypes.number,
  children: React.PropTypes.node.isRequired,
};

Table.defaultProps = {
  isLight: false,
  isHover: false,
  isStriped: false,
  breakpoint: null,
};

export default Table;
