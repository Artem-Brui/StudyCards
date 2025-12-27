import classNames from "classnames";
import type React from "react";

export type ButtonStyle =
  | "button"
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
  | "button_icon_circle-plus";

type Props = {
  buttonText: string;
  buttonStyles: ButtonStyle[];
};

export const Button: React.FC<Props> = ({ buttonText, buttonStyles }) => {
  const styles = buttonStyles.reduce((acc, style) => {
    return {
      ...acc,
      [style]: true,
    };
  }, {});

  return <button className={classNames(styles)}>{buttonText}</button>;
};
