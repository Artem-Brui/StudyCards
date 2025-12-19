import type React from "react";
import "./CardQuestion.scss";
import type { CardType } from "../../CardItem";

type Props = {
  cardType: CardType;
  question: string;
};

export const CardQuestion: React.FC<Props> = ({ cardType, question }) => {
  return <p className={`card_${cardType}_question`}>{question}</p>;
};
