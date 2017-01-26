import tc from 'tinycolor2';
import colors from './colors';

const components = {
  base_size: '62.5%',  // 10px
  spacing_horizontal: '2rem',
  spacing_vertical: '2rem',
  padding_base_vertical: '1rem',
  padding_base_horizontal: '1.6rem',
  padding_small_vertical: '0.5rem',
  padding_small_horizontal: '1rem',
  cell_padding: '1.2rem',
  border_color: colors.gray_lighter,
  active_color: 'white',
  active_background: tc(colors.primary).darken(15).toString(),
  shadow: '0 0.1rem 0.3rem rgba(0,0,0,.125)',
  shadow_large: '0rem 0.2rem 0.8rem rgba(0,0,0,.25)',
  border_radius: '0.3rem',
  input_height: '2.75em',
};

export default components;
