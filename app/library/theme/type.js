import brand from "../../brand"

const type = {
  font:                 brand.type.font,
  font_size:            `${brand.type.size}px`,
  font_size_small:      '0.9em',
  font_size_h1:         `${Math.floor(brand.type.size*2.8)}px`,
  font_size_h2:         `${Math.floor(brand.type.size*2.3)}px`,
  font_size_h3:         `${Math.floor(brand.type.size*1.9)}px`,
  font_size_h4:         `${Math.floor(brand.type.size*1.4)}px`,
  font_size_h5:         `${Math.floor(brand.type.size*1.2)}px`,
  font_size_h6:         `${Math.floor(brand.type.size*1.1)}px`,
  line_height_computed: `${Math.floor(brand.type.size*brand.type.line_height)}px`,
  line_height_small:    "1.5",
  text_color:           "#222222",
  link_color:           "blue",
  link_hover_color:     "darkblue"
}

export default type;