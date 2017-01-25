/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import { RadioGroup, Radio } from '../../';

it('renders correctly', () => {
  const tree = shallow(
    <RadioGroup>
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </RadioGroup>,
  );

  expect(tree).toMatchSnapshot();
});

it('should throw an error when a child isn\'t a <Radio />', () => {
  const tree = () => shallow(
    <RadioGroup>
      <Radio value="1">Option 1</Radio>
      <div>Option 2</div>
      <Radio value="3">Option 3</Radio>
    </RadioGroup>,
  );

  expect(tree).toThrowError('Unexpected component in <RadioGroup />, make sure all children are <Radio /> components.');
});
