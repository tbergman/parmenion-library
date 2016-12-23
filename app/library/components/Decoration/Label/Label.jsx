import React from 'react';
import styled from 'styled-components';
import styles from '../../../theme';


/* ==========================================================================
   Styles
========================================================================== */

const Default = styled.span`
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
  background-color: ${styles.colors.gray};
  &:empty {
      display: none;
  }
`;

const Success = styled(Default)`
  background-color: ${props => props.theme.colors.states.success};
`;

const Danger = styled(Default)`
  background-color: ${props => props.theme.colors.states.danger};
`;

const Warning = styled(Default)`
  background-color: ${props => props.theme.colors.states.warning};
`;

const Info = styled(Default)`
  background-color: ${props => props.theme.colors.states.info};
`;

/* ==========================================================================
   React Component
========================================================================== */

class Label extends React.Component {
  render() {
    const {children, type} = this.props;

    const Label = ((type) => {
      switch(type) {
        case 1:
          return Success;
        case 2:
          return Danger;
        case 3:
          return Warning;
        case 4:
          return Info;
        default:
          return Default;
      }
    })(type);

    return (
      <Label>
        { children }
      </Label>
    );
  }
}

Label.propTypes = {
  type: React.PropTypes.number,
  children: React.PropTypes.node.isRequired
};

Label.defaultProps = {
  type: 0
};

export default Label;