import type React from "react";
import "./CardAnswer.scss";
import type { cardComponentPropsType } from "../../CardItem";


export const CardAnswer: React.FC<cardComponentPropsType> = ({ cardComponentProps }) => {
 const { cardVersion, answer } = cardComponentProps;

  return (
    <div className={`card_${cardVersion}_answer-container`}>
      <p className={"card_answer-title"}>Answer:</p>
      <p className={`card_${cardVersion}_answer`}>{answer}</p>
    </div>
  );
};
