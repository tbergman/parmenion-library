import React, { PropTypes } from 'react';
import styled from 'styled-components';
import styles from '../../../theme';

/* ==========================================================================
   Styles
========================================================================== */

function reduceValue(value, reduction) {
  return `${(parseFloat(value, 10) / reduction).toFixed(2)}rem`;
}

const H1Base = styled.h1`
  font-size: ${styles.type.font_size_h1};
  margin-top: 0;
  margin-bottom: ${reduceValue(styles.components.spacing_vertical, 1)};
`;

export const H1 = props => <H1Base {...props} />;
H1.propTypes = { children: PropTypes.string };

const H2Base = styled.h2`
  font-size: ${styles.type.font_size_h2};
  margin-top: 0;
  margin-bottom: ${reduceValue(styles.components.spacing_vertical, 1.2)};
`;

export const H2 = props => <H2Base {...props} />;
H2.propTypes = { children: PropTypes.string };

const H3Base = styled.h3`
  font-size: ${styles.type.font_size_h3};
  margin-top: 0;
  margin-bottom: ${reduceValue(styles.components.spacing_vertical, 1.4)};
`;

export const H3 = props => <H3Base {...props} />;
H3.propTypes = { children: PropTypes.string };

const H4Base = styled.h4`
  font-size: ${styles.type.font_size_h4};
  margin-top: 0;
  margin-bottom: ${reduceValue(styles.components.spacing_vertical, 1.6)};
`;

export const H4 = props => <H4Base {...props} />;
H4.propTypes = { children: PropTypes.string };

const H5Base = styled.h5`
  font-size: ${styles.type.font_size_h5};
  margin-top: 0;
  margin-bottom: ${reduceValue(styles.components.spacing_vertical, 1.8)};
`;

export const H5 = props => <H5Base {...props} />;
H5.propTypes = { children: PropTypes.string };

const H6Base = styled.h6`
  font-size: ${styles.type.font_size_h6};
  margin-top: 0;
  margin-bottom: ${reduceValue(styles.components.spacing_vertical, 2)};
`;

export const H6 = props => <H6Base {...props} />;
H6.propTypes = { children: PropTypes.string };
