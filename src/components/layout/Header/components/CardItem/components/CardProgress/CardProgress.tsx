import type React from "react";
import "./CardProgress.scss";
import type { CardVersionType } from "../../CardItem";

type CardProgressProps = {
 cardVersion: CardVersionType;
}

export const CardProgress: React.FC<CardProgressProps> = ({ cardVersion }) => {

  return (
    <div className={`card_${cardVersion}_progress-container`}>
      <p>Progress</p>
    </div>
  );
};
