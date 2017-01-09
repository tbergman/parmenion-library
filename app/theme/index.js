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

const brand = {
  ...base,
  colors,
  type: {
    ...base.type,
    font: 'Arial, sans-serif',
    font_heading: 'Calibri, serif',
    font_size: '1.6rem',
    size: '1.6rem',
    line_height: '1.428571429',
  },
  components: {
    ...base.components,
    base_size: '62.5%',  // 10px
    border_radius: '0.25rem',
    active_background: colors.primary,
  },
};

export default brand;
