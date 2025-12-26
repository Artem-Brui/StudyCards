import type React from "react";
import "./CardAnswer.scss";
import type { CardVersionType } from "../../CardItem";
import { TextContent } from "../TextContent/TextContent";

type CardAnswerProps = {
  cardVersion: CardVersionType;
  answer: string;
};

export const CardAnswer: React.FC<CardAnswerProps> = ({
  cardVersion,
  answer,
}) => {
  return (
    <div className={`card_${cardVersion}_answer-container`}>
      <p className={"card_answer-title"}>Answer:</p>
      <TextContent cardVersion={cardVersion} text={answer} />
    </div>
  );
};
