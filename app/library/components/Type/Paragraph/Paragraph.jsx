import React, { PropTypes } from 'react';
import styled from 'styled-components';

/* ==========================================================================
   Styles
========================================================================== */

const PBase = styled.p`
  font-size: 1em;
  margin-top: 0;
  margin-bottom: ${props => props.theme.components.spacing_vertical};
`;

/** A paragraph component for rendering a block of text. */
export const P = props => <PBase {...props} />;

P.propTypes = { children: PropTypes.node.isRequired };
