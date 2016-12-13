import React from 'react';
import {styled} from 'styletron-react';

// variables.less
const font_size_h4 =          '18px';
const gray_lightest =         '#f9f9f9';
const border_radius_base =    '2px';

// alerts.less
const alert_padding_v =       '8px';
const alert_padding_h =       '10px';
const alert_padding =         alert_padding_v + ' ' + alert_padding_h;
const alert_border_radius =   border_radius_base;
const alert_bg =              gray_lightest;

// .c-alert
const Container = styled('div', () => ({
  padding:        alert_padding,
  margin:         '5px 0 15px',
  background:     alert_bg,
  border:         '1px solid transparent',
  borderRadius:   alert_border_radius,
  textAlign:      'left'
}));

// .c-alert__header
const Header = styled('div', () => ({
  fontSize:       font_size_h4,
  marginTop:      '1px',
  marginBottom:   '2px',
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