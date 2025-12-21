import type React from "react";
import "./TextContent.scss";
import type { cardComponentPropsType } from "../../CardItem";

export const TextContent: React.FC<cardComponentPropsType> = ({ cardComponentProps }) => {
 const { cardVersion, question } = cardComponentProps;

  const isQuestionLong = question.length > 32;
  const dots = isQuestionLong ? "..." : "";
  const textToShow = isQuestionLong ? question.slice(0, 28).trim() : question;

  return (
    <div className={`card_${cardVersion}_text-content`}>
      <p>{textToShow + dots}</p>
      {isQuestionLong && <i className="expand-icon"></i>}
    </div>
  );
};
