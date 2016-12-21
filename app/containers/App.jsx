import React from 'react';

import { Link, browserHistory } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          Links:
          {' '}
          <Link to="/">Home</Link>
          {' '}
          <Link to="/foo">Foo</Link>
          {' '}
          <Link to="/bar">Bar</Link>
        </header>
        <div style={{ marginTop: '1.5em' }}>{this.props.children}</div>
      </div>
    );
  }
}