import type React from "react";
import "./CardCategory.scss";
import type { cardComponentPropsType } from "../../CardItem";


export const CardCategory: React.FC<cardComponentPropsType> = ({ cardComponentProps }) => {
 const { cardVersion, category } = cardComponentProps;

  return (
    <div className={`card_${cardVersion}_category-container`}>
      <p className={`card_${cardVersion}_category`}>{category}</p>
    </div>
  );
};
