import React from 'react';
import { connect } from 'react-redux'
import * as countActions from '../actions/count'

import Label from "library/components/label/label.jsx";

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>
          <Label>{this.props.number}</Label>
        </p>
        <button onClick={() => this.props.increase(1)}>Increase</button>
        <button onClick={() => this.props.decrease(1)}>Decrease</button>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    number: state.count.number
  };
}

export default connect(mapStateToProps, countActions)(Home);