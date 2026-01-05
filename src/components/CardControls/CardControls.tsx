import type React from "react";
import styles from "./CardControls.module.scss";
import { Button } from "@/shared/Button/Button";
import { buttonStyles } from "@/shared/Button/service";

export const CardControls: React.FC = () => {

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
