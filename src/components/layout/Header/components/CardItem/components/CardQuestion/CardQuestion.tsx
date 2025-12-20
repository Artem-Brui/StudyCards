import type React from "react";
import "./CardQuestion.scss";
import type { CardType } from "../../CardItem";
import classNames from "classnames";

type Props = {
  cardType: CardType;
  question: string;
};

export const CardQuestion: React.FC<Props> = ({ cardType, question }) => {

  return (
    <div className={`card_${cardType}_question`}>
      <p className={classNames()}>
        {question}
      </p>
    </div>
  );
};
