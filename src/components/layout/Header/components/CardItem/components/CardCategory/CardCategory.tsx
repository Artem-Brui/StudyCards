import type React from "react";
import "./CardCategory.scss";
import type { CardType } from "../../CardItem";

type Props = {
  cardType: CardType;
  category: string;
};

export const CardCategory: React.FC<Props> = ({ cardType, category }) => {
  return (
    <div className={`card_${cardType}_category-container`}>
      <p className={`card_${cardType}_category`}>{category}</p>
    </div>
  );
};
