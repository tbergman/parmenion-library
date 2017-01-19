import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';

/* ==========================================================================
   Styles
========================================================================== */

const resetMargins = css`
  margin-top: 0;
  margin-bottom: 0;
`;

const H1 = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h1};
    ${resetMargins};
  `}
`;

const H2Base = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h2};
    ${resetMargins};
  `}
`;

const H3Base = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h3};
    ${resetMargins};
  `}
`;

const H4Base = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h4};
    ${resetMargins};
  `}
`;

const H5Base = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h5};
    ${resetMargins};
  `}
`;

const H6Base = styled.h6`
  ${({ theme }) => css`
    font-size: ${theme.type.font_size_h6};
    ${resetMargins};
  `}
`;

export const PageHeader = props => <H1 {...props} />;
PageHeader.propTypes = { children: PropTypes.string };

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
