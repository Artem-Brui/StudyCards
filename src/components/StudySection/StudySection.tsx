import type React from "react";
import styles from "./StudySection.module.scss";
import { CardItem } from "../CardItem/CardItem";
import { Button } from "@/shared/Button/Button";
import { CardControls } from "../CardControls/CardControls";
import { buttonStyles } from "@/service/service";
import { useCardsList } from "@/app/customHooks/useCardsList";

export const StudySection: React.FC = () => {
  const fetchedCards = useCardsList();
  const cards = fetchedCards ? fetchedCards : [];

  return (
    <section className={styles.study_section}>
      <CardControls buttonStyles={buttonStyles} />

      <div className={styles.card_studying}>
        <CardItem cardVersion="study" card={cards[5]} />

        <div className={styles.card_studying_buttons}>
          <Button buttonText="I Know This" buttonStyles={buttonStyles.know} />
          <Button
            buttonText="Reset Progress"
            buttonStyles={buttonStyles.reset}
          />
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
