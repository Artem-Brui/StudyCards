import type { CardItemType } from "@/assets/base/base";
import styles from "./ProgressBar.module.scss";
import type React from "react";
import { useCardsList } from "@/app/customHooks/useCardsList";
import classNames from "classnames";
import type { ButtonStyle } from "@/types/types";

type Props = {
  card: CardItemType;
};

export const ProgressBar: React.FC<Props> = ({ card }) => {
  const cards = useCardsList();
  const isGotData = cards !== undefined && card !== undefined;
  const isMastered = card.mastered;
  const cardsByCategoryAmount = isGotData
    ? cards.filter((item) => item.category === card.category).length
    : 0;
  const masteredCardsAmount = isGotData
    ? cards.filter((item) => item.category === card.category && item.mastered)
        .length
    : 0;
  const completionPercent = Math.floor(
    (masteredCardsAmount / cardsByCategoryAmount) * 100
  ).toString();

  const progressBarText = isMastered
    ? `Mastered ${masteredCardsAmount} / ${cardsByCategoryAmount}`
    : `${masteredCardsAmount} / ${cardsByCategoryAmount}`;

  const buttonStyles: ButtonStyle[] = [
    "button",
    "button_colored",
    "button_icon-side_left",
    "button_shadow",
    "button_icon_brain-solid",
  ];

  return (
    <div className={styles.progress_bar} data-element="progress-bar">
      <i
        className={classNames({
          [styles.icon]: !isMastered,
          [styles[`percent_${completionPercent}`]]: !isMastered,
        })}
        data-percentage={completionPercent}
      ></i>
      <p
        className={classNames(
          styles.value,
          {[styles.button_individual] : isMastered},
          ...(isMastered ? buttonStyles : [])
        )}
      >
        {progressBarText}
      </p>
    </div>
  );
};
