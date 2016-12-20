import React from 'react';
import styled from 'styled-components';
import styles from '../../../theme';
import InputText from "../InputText";


/* ==========================================================================
   Styles
========================================================================== */

const Input = styled(InputText)``;

/* ==========================================================================
   React Component
========================================================================== */

class InputPassword extends React.Component {
  render() {
    const {placeholder} = this.props;
    return <Input placeholder={placeholder} type="password" />;
  }
}

InputPassword.propTypes = {
  placeholder: React.PropTypes.string
};

InputPassword.defaultProps = {
  placeholder: null
};

export default InputPassword;