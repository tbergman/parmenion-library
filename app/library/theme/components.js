import brand from "../../brand"
import colors from "./colors.js"

const components = {
  spacing_horizontal: 				   "2rem",
  spacing_vertical: 				     "2rem",
  padding_base_vertical:         "0.6rem",
  padding_base_horizontal:       "1.2rem",
  padding_small_vertical:        "0.4rem",
  padding_small_horizontal:      "1rem",
  border_radius:                 brand.components.border_radius,
  border_color:                  colors.gray_lighter,
  active_color:                  "white",
  active_background:             brand.colors.primary,
  shadow: 							         "0 0.1rem 0.3rem rgba(0,0,0,.125)",
  shadow_large: 							   "0.2rem 0.3rem 1rem rgba(0,0,0,.25)"
}

export default components;
