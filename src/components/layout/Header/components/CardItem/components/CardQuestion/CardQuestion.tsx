import type React from "react";
import "./CardQuestion.scss";
import { TextContent } from "../TextContent/TextContent";
import type { CardVersionType } from "../../CardItem";

type CardQuestionProps = {
 cardVersion: CardVersionType;
 question: string;
}

export const CardQuestion: React.FC<CardQuestionProps> = ({ cardVersion, question }) => {
 
  return (
    <div className={`card_${cardVersion}_question-container`}>
      <TextContent cardVersion={cardVersion} text={question} />
    </div>
  );
};
