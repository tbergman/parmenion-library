import React from 'react';
import styled from 'styled-components';
import withTheme from '../../../hoc/withTheme.jsx'
import styles from '../../theme/index.js';
import tinycolor from 'tinycolor2';



/* ==========================================================================
   Styles
========================================================================== */

/* Block styles
========================================================================== */

const Container = styled.div`
  position: relative;
  display: inline-block;
  margin: 5px 0 15px;
  width: 100%;
  padding: 8px 10px;
  text-align: left;
  border-radius: ${styles.components.border_radius_base};
  border: 1px solid ${props => tinycolor(props.color).lighten(20).toString()};
  background: ${props => tinycolor(props.color).lighten(30).toString()};
  color: ${props => tinycolor(props.color).darken(30).toString()};
  ${ props => props.hasArrow && `&:after {
    content: "▲";
    position: absolute;
    top: -14px;
    left: 15px;
    color: ${props => tinycolor(props.color).lighten(20).toString()};
  }`}
  &:hover {
    color: ${styles.colors.bright_blue};
  }
  @media (min-width: 1024px) {
    padding: 8px 20px;
  }
`;


/* Element styles
========================================================================== */

const Header = styled.div`
  margin-top: 1px;
  margin-bottom: 2px;
  font-size: ${styles.type.font_size_h4};
  color: inherit;
`;

const Icon = styled.div`
  float: left;
  margin: 3px 10px 0 0;
  font-size: 1em;
`;

const Description = styled.div`
  margin: 0;
`;


/* ==========================================================================
   React Component
========================================================================== */

class Alert extends React.Component {
  render() {
    const {status, hasArrow, title, children, theme} = this.props;
    
    const color = (() => {
      switch(status) {
        case 1: 
          return theme.colors.states.success;
        case 2: 
          return theme.colors.states.danger;
        case 3: 
          return theme.colors.states.warning;
        case 4: 
          return theme.colors.states.info;
        default: 
          return styles.colors.grey_light;
      }
    })();
    
    return <Container color={color} hasArrow={hasArrow}>
      <Header>{ title }</Header>
      <Description>
        { children }
      </Description>
    </Container>;
  }
}

Alert.propTypes = {
  title: React.PropTypes.string,
  status: React.PropTypes.number,
  hasArrow: React.PropTypes.bool
};
export default withTheme(Alert);