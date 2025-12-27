import type React from "react";
import styles from "./StudySection.module.scss";
import { CardItem } from "../CardItem/CardItem";
import type { CardItemType } from "@/assets/base/base";
import base from "@/assets/base/base.json";
import { Button, type ButtonStyle } from "@/shared/Button/Button";
import { CardControls } from "../CardControls/CardControls";

const cards: CardItemType[] = base;

interface ButtonStylesType {
  categories: ButtonStyle[];
  shuffle: ButtonStyle[];
  know: ButtonStyle[];
  reset: ButtonStyle[];
  previous: ButtonStyle[];
  next: ButtonStyle[];
}

export const StudySection: React.FC = () => {
  const buttonStyles: ButtonStylesType = {
    categories: ["button", "button_icon-side_right", "button_icon_angle-down"],
    shuffle: ["button", "button_icon-side_left", "button_icon_shuffle"],
    know: ["button", "button_colored", "button_shadow", "button_icon-side_left", "button_icon_check-circle"],
    reset: ["button", "button_shadow", "button_icon-side_left", "button_icon_undo-alt"],
    previous: ["button", "button_icon-side_left", "button_icon_angle-left"],
    next: ["button", "button_icon-side_right", "button_icon_angle-right"],
  };

  return (
    <section className={styles.study_section}>
      <CardControls />

      <div className={styles.card_studying}>
        <CardItem cardVersion="study" card={cards[5]} />

        <div className={styles.card_studying_buttons}>
          <Button buttonText="I Know This" buttonStyles={buttonStyles.know} />
          <Button buttonText="Reset Progress" buttonStyles={buttonStyles.reset} />
        </div>
      </div>

      <div className={styles.card_pagination}>
        <Button buttonText="Previous" buttonStyles={buttonStyles.previous} />
        <p>Card 1 of 45</p>
        <Button buttonText="Next" buttonStyles={buttonStyles.next} />
      </div>
    </section>
  );
};
