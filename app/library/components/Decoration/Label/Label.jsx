import React from 'react';
import styled, { css } from 'styled-components';


/* ==========================================================================
   Styles
========================================================================== */

const Default = styled.span`${({ theme }) => css`
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
  background-color: ${theme.colors.gray};
  &:empty {
      display: none;
  }
`}`;

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
    const { children, type } = this.props;

    const InnerLabel = (() => {
      switch (type) {
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
    })();

    return (
      <InnerLabel>
        { children }
      </InnerLabel>
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
