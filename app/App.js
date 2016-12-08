import React from 'react';
import "library/theme/typography.less";

import Label from "library/components/label/label.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
        <p>
          <Label>This is a label</Label>
        </p>
      </div>
    );
  }
}