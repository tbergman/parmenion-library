import React from 'react';
import styled from 'styled-components';
import styles from '../../theme/index.js';
import tinycolor from 'tinycolor2';


/* ==========================================================================
   Styles
========================================================================== */

/* Block styles
========================================================================== */

let getBorder = c => tinycolor(c).lighten(20).toString();
let getBackground = c => tinycolor(c).lighten(30).toString();
let getColor = c => tinycolor(c).darken(30).toString();

const Container = styled.div`
  position: relative;
  display: inline-block;
  margin: 5px 0 15px;
  width: 100%;
  padding: 8px 10px;
  text-align: left;
  border-radius: ${styles.components.border_radius_base};
  border: 1px solid ${props => {
    switch(props.type) {
      case 1:
        return getBorder(props.theme.success);
      case 2:
      case 5:
        return getBorder(props.theme.danger);
      case 3:
        return getBorder(props.theme.warning);
      case 4:
        return getBorder(props.theme.info);
      default:
        return 'transparent'
    }
  }};
  background: ${props => {
    switch(props.type) {
      case 1:
        return getBackground(props.theme.success);
      case 2:
      case 5:
        return getBackground(props.theme.danger);
      case 3:
        return getBackground(props.theme.warning);
      case 4:
        return getBackground(props.theme.info);
      default:
        return styles.colors.gray_lightest
    }
  }};
  color: ${props => {
    switch(props.type) {
      case 1:
        return getColor(props.theme.success);
      case 2:
      case 5:
        return getColor(props.theme.danger);
      case 3:
        return getColor(props.theme.warning);
      case 4:
        return getColor(props.theme.info);
      default:
        return styles.type.text_color
    }
  }};
  ${ props => props.type === 5 && `&:after {
    content: "▲";
    position: absolute;
    top: -12px;
    left: 15px;
    color: ${getBackground(props.theme.danger)};
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

class Alert extends React.Component{
  render() {
    let {type, title, children} = this.props;
    
    return <Container type={this.props.type}>
      <Header>{ title }</Header>
      <Description>
        { children }
      </Description>
    </Container>;
  }
}

Alert.propTypes = {
  title: React.PropTypes.string,
  type: React.PropTypes.number
};

export default Alert;