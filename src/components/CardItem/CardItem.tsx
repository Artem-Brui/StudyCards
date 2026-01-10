import type React from "react";
import styles from "./CardItem.module.scss";
import type { CardItemType } from "@/assets/base/base";
import { useState } from "react";
import { ProgressBar } from "@/shared/ProgressBar/ProgressBar";
import classNames from "classnames";

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
  const [isControlMenu, setIsControlMenu] = useState(false);

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
      className={classNames(styles.card_item, {
        [styles.covered]: isControlMenu,
      })}
      data-version={cardVersion}
      onClick={handleCardClick}
    >
      {isQuestionVisibile && <p className={styles.question}>{question}</p>}
      {isAnswerVisibile && <p className={styles.answer}>{answer}</p>}
      <p className={styles.category}>{category}</p>
      <ProgressBar card={card} />
      {isListPage && (
        <button
      onClick={() => setIsControlMenu((x) => !x)}
      onBlur={() => setIsControlMenu((x) => !x)}
          className={styles.service_button}
        ></button>
      )}
      {isListPage && isControlMenu && (
        <div className={styles.control_menu}>
          <button
            className={styles.control_menu_button}
            data-card_control="edit"
          >
            Edit
          </button>
          <button
            className={styles.control_menu_button}
            data-card_control="delete"
          >
            Delete
          </button>
        </div>
      )}
    </article>
  );
};
