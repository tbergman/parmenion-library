import React, {Component} from 'react'
import {ThemeProvider} from 'styled-components'
import brand from '../../app/brand'

export default class Wrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={brand}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}
