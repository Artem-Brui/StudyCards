import type { ButtonStyle } from "@/types/types";
import classNames from "classnames";
import type React from "react";



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
