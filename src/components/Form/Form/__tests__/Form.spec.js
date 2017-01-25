/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../Form';

it('renders a <Form /> correctly', () => {
  const tree = shallow(
    <Form>
      Hello, world!
    </Form>,
  );

  expect(tree).toMatchSnapshot();
});

it('renders a <Row /> correctly', () => {
  const tree = shallow(
    <Form.Row>
      <Form.Field label="Field 1">
        <div />
      </Form.Field>
      <Form.Field label="Field 2">
        <div />
      </Form.Field>
      <Form.Field label="Field 3">
        <div />
      </Form.Field>
    </Form.Row>,
  );

  expect(tree).toMatchSnapshot();
});
