import type React from "react";
import "./CardCategory.scss";
import type { CardVersionType } from "../../CardItem";

type CardCategoryProps = {
 cardVersion: CardVersionType;
 category: string;
}

export const CardCategory: React.FC<CardCategoryProps> = ({ cardVersion, category }) => {

  return (
    <div className={`card_${cardVersion}_category-container`}>
      <p className={`card_${cardVersion}_category`}>{category}</p>
    </div>
  );
};
