import React from 'react';
import { connect } from 'react-redux'
import * as countActions from '../actions/count'

import Button from "library/components/Form/Button";
import ButtonGroup from "library/components/Form/ButtonGroup";

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.number}
        </p>
        <ButtonGroup>
          <Button onClick={() => this.props.decrease(1)}>Decrease</Button>
          <Button onClick={() => this.props.increase(1)}>Increase</Button>
        </ButtonGroup>
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