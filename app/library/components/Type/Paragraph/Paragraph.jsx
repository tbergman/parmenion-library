import styled from 'styled-components';

/* ==========================================================================
   Styles
========================================================================== */

const P = styled.p`
  font-size: 1em;
  margin-top: 0;
  margin-bottom: ${props => props.theme.components.spacing_vertical};
`;

export default P;
