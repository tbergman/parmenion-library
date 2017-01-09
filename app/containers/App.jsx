import React from 'react';

import { Link } from 'react-router';

export default props => (
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
    <div style={{ marginTop: '1.5em' }}>{props.children}</div>
  </div>
);
