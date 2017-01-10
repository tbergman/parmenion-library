import styled, { css } from 'styled-components';

/* ==========================================================================
   Styles
========================================================================== */

function reduceValue(value, reduction) {
  return `${(parseFloat(value, 10) / reduction).toFixed(2)}rem`;
}

const H1 = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h1};
    margin-top: 0;
    margin-bottom: ${reduceValue(theme.components.spacing_vertical, 1)};
  `}
`;

const H2 = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h2};
    margin-top: 0;
    margin-bottom: ${reduceValue(theme.components.spacing_vertical, 1.2)};
  `}
`;

const H3 = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h3};
    margin-top: 0;
    margin-bottom: ${reduceValue(theme.components.spacing_vertical, 1.4)};
  `}
`;

const H4 = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h4};
    margin-top: 0;
    margin-bottom: ${reduceValue(theme.components.spacing_vertical, 1.6)};
  `}
`;

const H5 = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h5};
    margin-top: 0;
    margin-bottom: ${reduceValue(theme.components.spacing_vertical, 1.8)};
  `}
`;

const H6 = styled.h6`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h6};
    margin-top: 0;
    margin-bottom: ${reduceValue(theme.components.spacing_vertical, 2)};
  `}
`;

export { H1, H2, H3, H4, H5, H6 };
