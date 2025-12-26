import type React from "react";
import styles from "./CardItem.module.scss";
import type { CardItemType } from "@/assets/base/base";

export type CardVersionType = "list" | "study";

type СardComponentProps = {
  card: CardItemType;
  cardVersion: CardVersionType;
};

export const CardItem: React.FC<СardComponentProps> = ({
  cardVersion,
  card,
}) => {
  const { question, answer, category } = card;
  const isStudy = cardVersion === 'study';

  return (
    <article className={styles.card_item} data-version={cardVersion}>
      <p className={styles.question}>{question}</p>
      <p className={styles.answer}>{answer}</p>
      <p className={styles.category}>{category}</p>
      <p className={styles.progress}>Progress</p>
      {!isStudy && <button className={styles.service_button}></button>}
    </article>
  );
};
