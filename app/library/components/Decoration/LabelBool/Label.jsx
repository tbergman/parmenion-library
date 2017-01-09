import React from 'react';
import styled from 'styled-components';
import styles from '../../../theme';


/* ==========================================================================
   Styles
========================================================================== */

const Container = styled.span`
  display: inline;
  padding: .3em .6em;
  font-size: 0.75em;
  font-weight: bold;
  line-height: 1;
  color: white;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
  background-color: ${props =>
    props.success && props.theme.colors.states.success ||
    props.danger && props.theme.colors.states.danger ||
    props.warning && props.theme.colors.states.warning ||
    props.info && props.theme.colors.states.info ||
    styles.colors.gray
  };
  &:empty {
      display: none;
  }
`;

/* ==========================================================================
   React Component
========================================================================== */

class Label extends React.Component {
  render() {
    const { children, success, danger, warning, info } = this.props;

    return (
      <Container success={success} danger={danger} warning={warning} info={info}>
        { children }
      </Container>
    );
  }
}

Label.propTypes = {
  type: React.PropTypes.number,
  children: React.PropTypes.node.isRequired,
};

Label.defaultProps = {
  type: 0,
};

export default Label;
