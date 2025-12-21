import type React from "react";
import "./CardProgress.scss";
import type { cardComponentPropsType } from "../../CardItem";


export const CardProgress: React.FC<cardComponentPropsType> = ({ cardComponentProps }) => {
 const { cardVersion } = cardComponentProps;

  return (
    <div className={`card_${cardVersion}_progress-container`}>
      <p>Progress</p>
    </div>
  );
};
