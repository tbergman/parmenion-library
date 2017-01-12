import React, { Component } from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import brand from '../../app/theme'

injectGlobal`
  .rsg--example-preview * {
    box-sizing: border-box;
  }
`

export default class Wrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={brand}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}
