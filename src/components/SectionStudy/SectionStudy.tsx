import type React from "react";
import styles from "./SectionStudy.module.scss";
import { CardItem } from "../CardItem/CardItem";
// import { Button } from "@/shared/Button/Button";
import { CardControls } from "../CardControls/CardControls";
// import { buttonStyles } from "@/shared/Button/service";
import { useCardsList } from "@/app/customHooks/useCardsList";
import type { CardItemType } from "@/assets/base/base";
import { buttonStyles } from "@/shared/service";
import classNames from "classnames";
import { ErrorComponent } from "../ErrorComponent/ErrorComponent";

export const SectionStudy: React.FC = () => {
  const fetchedCards = useCardsList();

  const cardToShow = (cards: CardItemType[]) => {
    return cards[5];
  };

  return fetchedCards !== null ? (
    <section className={styles.study_section} data-section="study">
      <CardControls cards={fetchedCards} />

      <div className={styles.card_studying}>
        <CardItem cardVersion="study" card={cardToShow(fetchedCards)} />

        <div className={styles.card_studying_buttons}>
          <button className={classNames(buttonStyles.know)}>
            {"I Know This"}
          </button>
          <button className={classNames(buttonStyles.reset)}>
            {"Reset Progress"}
          </button>
        </div>
      </div>

      <div className={styles.card_pagination}>
        <button className={classNames(buttonStyles.previous)}>
          {"Previous"}
        </button>
        <p>Card 1 of 45</p>
        <button className={classNames(buttonStyles.next)}>{"Next"}</button>
      </div>
    </section>
  ) : (
    <ErrorComponent />
  );
};
