import React from 'react';
import {styled} from 'styletron-react';
import tinycolor from 'tinycolor2';
import styles from '../../theme/index.js';

function getStateVariables(type) {
  switch (type) {
    case 1:
      return {
        color: tinycolor(styles.colors.brand.success).darken(30).toString(),
        bg: tinycolor(styles.colors.brand.success).lighten(30).toString(),
        border_color: tinycolor(styles.colors.brand.success).lighten(20).toString()
      }
    case 2:
      return {
        color: tinycolor(styles.colors.brand.danger).darken(30).toString(),
        bg: tinycolor(styles.colors.brand.danger).lighten(30).toString(),
        border_color: tinycolor(styles.colors.brand.danger).lighten(20).toString()
      }
    case 3:
      return {
        color: tinycolor(styles.colors.brand.info).darken(30).toString(),
        bg: tinycolor(styles.colors.brand.info).lighten(30).toString(),
        border_color: tinycolor(styles.colors.brand.info).lighten(20).toString()
      }
    case 4:
      return {
        color: tinycolor(styles.colors.brand.warning).darken(30).toString(),
        bg: tinycolor(styles.colors.brand.warning).lighten(30).toString(),
        border_color: tinycolor(styles.colors.brand.warning).lighten(20).toString()
      }
    default:
      return {
        bg: styles.colors.gray_lightest,
        border_color: "transparent",
        color: styles.colors.text_color
      }
  }
}

const type = 1;
const _styles = getStateVariables(type);

// .c-alert
const Container = styled('div', () => ({
  margin:         '5px 0 15px',
  padding:        '8px 10px',
  border:         `1px solid ${_styles.border_color}`,
  background:     _styles.bg,
  borderRadius:   styles.components.border_radius_base,
  textAlign:      'left',
  color:          _styles.color
}));

// .c-alert__header
const Header = styled('div', () => ({
  marginTop:      '1px',
  marginBottom:   '2px',
  fontSize:       styles.type.font_size_h4,
  color:          'inherit'
}));

// .c-alert__icon
const Icon = styled('div', () => ({
  float:          'left',
  margin:         '3px 10px 0 0',
  fontSize:       '1em'
}));

// .c-alert__description
const Description = styled('div', () => ({
  margin: 0
}));

export default class Label extends React.Component {
  render() {
    return <Container>
      <Header>{ this.props.title }</Header>
      <Description>
        { this.props.children }
      </Description>
    </Container>;
  }
}

Label.propTypes = {
  title: React.PropTypes.string
};