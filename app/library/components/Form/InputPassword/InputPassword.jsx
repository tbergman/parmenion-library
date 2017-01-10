import React from 'react';
import styled from 'styled-components';
import { InputText } from '../InputText';


/* ==========================================================================
   Styles
========================================================================== */

const Input = styled(InputText)``;

/* ==========================================================================
   React Component
========================================================================== */

export const InputPassword = ({ placeholder }) => (
  <Input placeholder={placeholder} type="password" />
);

InputPassword.propTypes = {
  placeholder: React.PropTypes.string,
};

InputPassword.defaultProps = {
  placeholder: null,
};

export default InputPassword;
