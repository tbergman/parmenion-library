import React from 'react';
import { Radio } from '../Radio';
import { Horizontal } from '../../Layout';

const renderChildren = props =>
  React.Children.map(props.children, (child) => {
    if (!child) return null;

    if (child.type !== Radio) {
      throw new Error('Unexpected component in <RadioGroup />, make sure all children are <Radio /> components.');
    }

    if (child.props && child.props.value === props.value) {
      return React.cloneElement(child, {
        checked: true,
        onChange: props.onChange,
      });
    }

    return React.cloneElement(child, {
      checked: false,
      onChange: props.onChange,
    });
  });

export const RadioGroup = props => (
  <Horizontal>
    {renderChildren(props)}
  </Horizontal>
);
