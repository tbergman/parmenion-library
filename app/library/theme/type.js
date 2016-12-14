const font_size_base = 14;
const line_height_base = 1.428571429;

const type = {
  font:                 'Arial, sans-serif',
  font_size:            `${font_size_base}px`,
  font_size_h1:         `${Math.floor(font_size_base*2.8)}px`,
  font_size_h2:         `${Math.floor(font_size_base*2.3)}px`,
  font_size_h3:         `${Math.floor(font_size_base*1.9)}px`,
  font_size_h4:         `${Math.floor(font_size_base*1.4)}px`,
  font_size_h5:         `${Math.floor(font_size_base*1.2)}px`,
  font_size_h6:         `${Math.floor(font_size_base*1.1)}px`,
  line_height_computed: `${Math.floor(font_size_base*line_height_base)}px`,
  text_color:           "#222222",
  link_color:           "blue",
  link_hover_color:     "darkblue"
}

export default type;