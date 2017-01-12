import React from 'react';
import { InputText } from '../InputText';

const InputPassword = ({ placeholder }) => (
  <InputText placeholder={placeholder} type="password" />
);

InputPassword.propTypes = {
  placeholder: React.PropTypes.string,
};

InputPassword.defaultProps = {
  placeholder: null,
};

export default InputPassword;
