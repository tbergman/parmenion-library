import React from 'react';
import { connect } from 'react-redux';

import Button from 'library/components/Form/Button';
import ButtonGroup from 'library/components/Form/ButtonGroup';

import * as countActions from '../actions/count';

export const Home = props => (
  <div>
    <p>
      {props.number}
    </p>
    <ButtonGroup>
      <Button onClick={() => props.decrease(1)}>Decrease</Button>
      <Button onClick={() => props.increase(1)}>Increase</Button>
    </ButtonGroup>
  </div>
);

const mapStateToProps = function (state) {
  return {
    number: state.count.number,
  };
};

export default connect(mapStateToProps, countActions)(Home);
