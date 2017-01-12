import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';

/* ==========================================================================
   Styles
========================================================================== */

function reduceValue(value, reduction) {
  return `${(parseFloat(value, 10) / reduction).toFixed(2)}rem`;
}

const H1Base = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h1};
    margin-top: 0;
    margin-bottom: ${reduceValue(theme.components.spacing_vertical, 1)};
  `}
`;

const H2Base = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h2};
    margin-top: 0;
    margin-bottom: ${reduceValue(theme.components.spacing_vertical, 1.2)};
  `}
`;

const H3Base = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h3};
    margin-top: 0;
    margin-bottom: ${reduceValue(theme.components.spacing_vertical, 1.4)};
  `}
`;

const H4Base = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h4};
    margin-top: 0;
    margin-bottom: ${reduceValue(theme.components.spacing_vertical, 1.6)};
  `}
`;

const H5Base = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h5};
    margin-top: 0;
    margin-bottom: ${reduceValue(theme.components.spacing_vertical, 1.8)};
  `}
`;

const H6Base = styled.h6`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h6};
    margin-top: 0;
    margin-bottom: ${reduceValue(theme.components.spacing_vertical, 2)};
  `}
`;

export const H1 = props => <H1Base {...props} />;
H1.propTypes = { children: PropTypes.string };

export const H2 = props => <H2Base {...props} />;
H2.propTypes = { children: PropTypes.string };

export const H3 = props => <H3Base {...props} />;
H3.propTypes = { children: PropTypes.string };

export const H4 = props => <H4Base {...props} />;
H4.propTypes = { children: PropTypes.string };

export const H5 = props => <H5Base {...props} />;
H5.propTypes = { children: PropTypes.string };

export const H6 = props => <H6Base {...props} />;
H6.propTypes = { children: PropTypes.string };
