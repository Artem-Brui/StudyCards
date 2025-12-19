import type React from "react";
import "./CardProgress.scss";

type Props = {
  cardType: "list" | "study";
  progress: string;
};

export const CardProgress: React.FC<Props> = ({ cardType, progress }) => {
  return (
    <div className={`card_${cardType}_progress-container`}>
      <p>{progress}</p>
    </div>
  );
};
