import React from 'react';
import styled, { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import withTheme from '../../../../hoc/withTheme';


/* ==========================================================================
   Styles
========================================================================== */

/* Block styles
========================================================================== */

const Container = styled.div`
  ${({ theme, color, hasArrow }) => css`
    position: relative;
    display: inline-block;
    margin: 0 0 ${theme.components.spacing_vertical} 0;
    width: 100%;
    padding: ${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal};
    text-align: left;
    border-radius: ${theme.components.border_radius};
    border: 0.1rem solid ${tinycolor(color).lighten(20).toString()};
    background: ${tinycolor(color).lighten(30).toString()};
    color: ${tinycolor(color).darken(30).toString()};
    font-size: 1em;
    ${hasArrow && `&:after {
      content: "▲";
      position: absolute;
      top: -1.4rem;
      left: 1.5rem;
      color: ${tinycolor(color).lighten(20).toString()};
    }`}
  `}
`;


/* Element styles
========================================================================== */

const Header = styled.div`
  margin-top: 0;
  margin-bottom: 0.25rem;
  font-size: ${props => props.theme.type.font_size_h4};
  color: inherit;
`;

const Description = styled.div`
  margin: 0;
`;


/* ==========================================================================
   React Component
========================================================================== */

class Alert extends React.Component {
  render() {
    const { status, hasArrow, title, children, theme } = this.props;

    const color = (() => {
      switch (status) {
        case 1:
          return theme.colors.states.success;
        case 2:
          return theme.colors.states.danger;
        case 3:
          return theme.colors.states.warning;
        case 4:
          return theme.colors.states.info;
        default:
          return theme.colors.grey_light;
      }
    })();

    return (<Container color={color} hasArrow={hasArrow}>
      <Header>{ title }</Header>
      <Description>
        { children }
      </Description>
    </Container>);
  }
}

Alert.propTypes = {
  title: React.PropTypes.string,
  status: React.PropTypes.number,
  hasArrow: React.PropTypes.bool,
};
export default withTheme(Alert);
