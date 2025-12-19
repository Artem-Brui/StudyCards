import type React from "react";
import "./CardItem.scss";
import { CardQuestion } from "./components/CardQuestion/CardQuestion";
import { CardAnswer } from "./components/CardAnswer/CardAnswer";
import { CardCategory } from "./components/CardCategory/CardCategory";
import { CardProgress } from "./components/CardProgress/CardProgress";
import { CardServiceButton } from "./components/CardServiceButton/CardServiceButton";
import type { CardItemType } from "@/assets/base/base";


export type CardType = 'list' | 'study';

type Props = {
 cardType: CardType;
 card: CardItemType;
}

export const CardItem: React.FC<Props> = ({ cardType, card}) => {
  const { category, question, answer } = card;

  return (
    <li className={`card_item-${cardType}`}>
      <CardQuestion cardType={cardType} question={question} />
      <CardAnswer cardType={cardType} answer={answer} />
      <CardCategory cardType={cardType} category={category} />
      <CardProgress cardType={cardType} progress='Progress' />
      <CardServiceButton />
    </li>
  );
};
