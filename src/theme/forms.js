import tc from 'tinycolor2';
import colors from './colors';
import components from './components';

const forms = {
  input_bg: 'white',
  input_bg_disabled: colors.gray_lighter,
  input_color: colors.gray,
  input_border: colors.gray_light,
  input_inner_shadow: 'inset 0 0.1rem 0.1rem rgba(0,0,0,.05)',
  input_border_radius: components.border_radius,
  input_border_radius_small: components.border_radius_small,
  input_border_focus: colors.bright_blue,
  input_color_placeholder: tc(colors.gray_light).darken(15).toString(),
  input_height: 'auto',
  input_height_small: '3rem',
  cursor_disabled: 'not-allowed',
};

export default forms;
