import type { CardItemType } from "@/assets/base/base";
import styles from "./ProgressBar.module.scss";
import type React from "react";
import { useCardsList } from "@/app/customHooks/useCardsList";
import classNames from "classnames";

type Props = {
  card: CardItemType;
};

export const ProgressBar: React.FC<Props> = ({ card }) => {
  const cards = useCardsList();
  const isGotData = cards !== undefined && card !== undefined;
  const isMastered = card.mastered;

  const amount = {
    full: isGotData
      ? cards.filter((item) => item.category === card.category).length
      : 0,
    mastered: isGotData
      ? cards.filter((item) => item.category === card.category && item.mastered)
          .length
      : 0,
  };
  const completionPercent = Math.floor(
    (amount.mastered / amount.full) * 100
  ).toString();

  const barText = amount.mastered + "/" + amount.full;

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
          { [styles.button]: isMastered },
        )}
      >
        {isMastered ? `Mastered ${barText}` : barText}
      </p>
    </div>
  );
};
