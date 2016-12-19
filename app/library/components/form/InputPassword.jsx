import React from 'react';
import styled from 'styled-components';
import styles from '../../theme';
import InputText from "./InputText.jsx";


/* ==========================================================================
   Styles
========================================================================== */

const Input = styled(InputText)`
  margin: 50px;
`;

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