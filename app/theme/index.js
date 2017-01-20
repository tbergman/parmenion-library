import base from '../library/theme';

const colors = {
  ...base.colors,
  primary: '#0a7ead',
  secondary: '#5bc0de',
  states: {
    success: '#91c95b',
    danger: '#BF2A23',
    info: '#5bc0de',
    warning: '#f0ad4e',
  },
};

const type = {
  ...base.type,
  font: 'Arial, sans-serif',
  font_heading: 'Calibri, serif',
  font_size: '1.6rem',
  size: '1.6rem',
  line_height: '1.428571429',
};

const components = {
  ...base.components,
  base_size: '62.5%',  // 10px
  border_radius: '0.3rem',
  active_background: colors.primary,
};

const forms = {
  ...base.forms,
  input_border_radius: components.border_radius,
};

const breakpoints = {
  ...base.breakpoints,
  xs_max: '767px',
};

const brand = {
  ...base,
  colors,
  type,
  components,
  forms,
  breakpoints,
};

export default brand;
