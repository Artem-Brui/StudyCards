import type React from "react";
import "./CardAnswer.scss";
import type { CardType } from "../../CardItem";

type Props = {
  cardType: CardType;
  answer: string;
};

export const CardAnswer: React.FC<Props> = ({ cardType, answer }) => {
  return (
    <div className={`card_${cardType}_answer-container`}>
      <p className={"card_answer-title"}>Answer:</p>
      <p className={`card_${cardType}_answer`}>{answer}</p>
    </div>
  );
};
