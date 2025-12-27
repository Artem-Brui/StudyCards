import type React from "react";
import styles from "./CardControls.module.scss";
import { Button, type ButtonStyle } from "@/shared/Button/Button";

interface ButtonStylesType {
  categories: ButtonStyle[];
  shuffle: ButtonStyle[];
}

export const CardControls: React.FC = () => {
  const buttonStyles: ButtonStylesType = {
    categories: ["button", "button_icon-side_right", "button_icon_angle-down"],
    shuffle: ["button", "button_icon-side_left", "button_icon_shuffle"],
  };

  return (
    <div className={styles.card_controls}>
        <div>
          <Button
            buttonText="All Categories"
            buttonStyles={buttonStyles.categories}
          />

          <label className={styles.hide_checkbox}>
            <input type="checkbox" placeholder="dddddd" />
            <p>Hide Mastered</p>
          </label>
        </div>

        <Button buttonText="Shuffle" buttonStyles={buttonStyles.shuffle} />
      </div>
  );
};
