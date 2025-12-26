import type React from "react";
import styles from "./CardItem.module.scss";
import type { CardItemType } from "@/assets/base/base";
import { useState } from "react";

export type CardVersionType = "list" | "study";

type СardComponentProps = {
  card: CardItemType;
  cardVersion: CardVersionType;
};

export const CardItem: React.FC<СardComponentProps> = ({
  cardVersion,
  card,
}) => {
  const [answerSwitcher, setAnswerSwitcher] = useState(false);

  const { question, answer, category } = card;
  const isListPage = cardVersion === "list";
  const isQuestionVisibile = isListPage || !answerSwitcher;
  const isAnswerVisibile = isListPage || answerSwitcher;

  const handleCardClick = () => {
    if (isListPage) return;

    setAnswerSwitcher((x) => !x);
  };

  return (
    <article
      className={styles.card_item}
      data-version={cardVersion}
      onClick={handleCardClick}
    >
      {isQuestionVisibile && <p className={styles.question}>{question}</p>}
      {isAnswerVisibile && <p className={styles.answer}>{answer}</p>}
      <p className={styles.category}>{category}</p>
      <p className={styles.progress}>Progress</p>
      {isListPage && <button className={styles.service_button}></button>}
    </article>
  );
};
