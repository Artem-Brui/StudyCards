export type ButtonStyle =
  | "button"
  | "button_border"
  | "button_colored"
  | "button_shadow"
  | "button_icon-side_right"
  | "button_icon-side_left"
  | "button_icon_check"
  | "button_icon_check-circle"
  | "button_icon_shuffle"
  | "button_icon_angle-up"
  | "button_icon_angle-down"
  | "button_icon_angle-left"
  | "button_icon_angle-right"
  | "button_icon_undo-alt"
  | "button_icon_brain-solid"
  | "button_icon_circle-plus";

export type ButtonStylesType = {
    categories: ButtonStyle[];
    shuffle: ButtonStyle[];
    know: ButtonStyle[];
    reset: ButtonStyle[];
    previous: ButtonStyle[];
    next: ButtonStyle[];
  }

export const buttonStyles: ButtonStylesType = {
  categories: ["button", "button_border", "button_icon-side_right", "button_icon_angle-down"],
  shuffle: ["button", "button_border", "button_icon-side_left", "button_icon_shuffle"],
  know: ["button", "button_border", "button_colored", "button_shadow", "button_icon-side_left", "button_icon_check-circle"],
  reset: ["button", "button_border", "button_shadow", "button_icon-side_left", "button_icon_undo-alt"],
  previous: ["button", "button_border", "button_icon-side_left", "button_icon_angle-left"],
  next: ["button", "button_border", "button_icon-side_right", "button_icon_angle-right"],
};