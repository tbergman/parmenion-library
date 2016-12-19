import colors from "./colors.js"
import components from "./components.js"
import type from "./type.js"
import tc from 'tinycolor2';

const forms = {
	input_bg:                            "white",
	input_bg_disabled:                   colors.gray_lighter,

	input_color:                         colors.gray,
	input_border:                        colors.gray_light,

	input_border_radius:                 components.border_radius_base,
	input_border_radius_small:           components.border_radius_small,

	input_border_focus:                  colors.bright_blue,
	input_color_placeholder:             tc(colors.gray_light).darken(15).toString(),

	input_height_base:                   `${(parseFloat(type.line_height_computed,10) + (parseFloat(components.padding_base_vertical,10) * 2) + 2)}px`,
	input_height_small:                  "30px",

	form_group_margin_bottom:            "15px",

	legend_color:                        colors.gray_dark,
	legend_border_color:                 components.border_color,

	input_group_addon_bg:                colors.gray_lighter,
	input_group_addon_border_color:      components.border_color,

	cursor_disabled:                     "not_allowed",

	form_filter_bg_color:                colors.gray_lightest,
	form_filter_border_color:            components.border_color
}

export default forms