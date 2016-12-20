import colors from "./colors.js"
import components from "./components.js"
import type from "./type.js"
import tc from 'tinycolor2';

const forms = {
	input_bg:                    "white",
	input_bg_disabled:           colors.gray_lighter,
	input_color:                 colors.gray,
	input_border:                colors.gray_light,
	input_inner_shadow: 		     "inset 0 1px 1px rgba(0,0,0,.05)",
	input_border_radius:         components.border_radius,
	input_border_radius_small:   components.border_radius_small,
	input_border_focus:          colors.bright_blue,
	input_color_placeholder:     tc(colors.gray_light).darken(15).toString(),
	input_height:                `${(parseFloat(type.line_height_computed,10) + (parseFloat(components.padding_base_vertical,10) * 2) + 2)}px`,
	input_height_small:          "30px",
	cursor_disabled:             "not_allowed"
}

export default forms