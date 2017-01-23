import React from 'react';
import { Row, Column } from './Grid';

export const ContentWithRight = props => (
  <Row>
    <Column fill>{props.content}</Column>
    <Column>{props.right}</Column>
  </Row>
);
