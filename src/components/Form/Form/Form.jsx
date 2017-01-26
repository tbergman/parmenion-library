import React, { PropTypes } from 'react';
import { withContext, getContext } from 'recompose';
import { Stacked, Row, Column } from '../../Layout';
import { Label } from '../Label';

const FORM_HORIZONTAL_CONTEXT_KEY = '__formIsHorizontal';
const formContextTypes = { [FORM_HORIZONTAL_CONTEXT_KEY]: PropTypes.bool };

export const Form = withContext(
  formContextTypes,
  props => ({ [FORM_HORIZONTAL_CONTEXT_KEY]: props.horizontal }),
)(({ horizontal, ...props }) => (
  <form {...props}>
    <Stacked>
      {props.children}
    </Stacked>
  </form>
));

Form.Field = getContext(formContextTypes)((props) => {
  if (props[FORM_HORIZONTAL_CONTEXT_KEY]) {
    return <HorizontalFormField {...props} />;
  }

  return (
    <Stacked spaceBetween={0.5}>
      {props.label != null && (
        <Label>{props.label}</Label>
      )}

      {props.children}
    </Stacked>
  );
});

const HorizontalFormField = (props) => {
  if (!props.label) {
    return (
      <Stacked>
        {props.children}
      </Stacked>
    );
  }

  return (
    <Row alignItems="center">
      <Column sm={2}>
        <Label>{props.label}</Label>
      </Column>
      <Column sm={10}>
        <Stacked>
          {props.children}
        </Stacked>
      </Column>
    </Row>
  );
};

Form.Group = props => (
  <Form.Field label={props.label}>
    <Form.Row {...props}>
      {props.children}
    </Form.Row>
  </Form.Field>
);

Form.Row = props => (
  <Row divisions={props.divisions != null ? props.divisions : React.Children.count(props.children)}>
    {React.Children.map(props.children, child =>
      child != null
      ? (
        <Column md={1}>
          {child}
        </Column>
      )
      : null,
    )}
  </Row>
);

Form.propTypes = {
  children: React.PropTypes.node,
};
