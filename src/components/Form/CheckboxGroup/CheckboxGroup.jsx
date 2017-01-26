import React, { PropTypes } from 'react';
import { Horizontal } from '../../Layout';

export const CheckboxGroup = props => (
  <Horizontal>
    {props.children}
  </Horizontal>
);

CheckboxGroup.propTypes = {
  children: PropTypes.node,
};
