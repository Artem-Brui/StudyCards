import type React from "react";
import "./CardQuestion.scss";
import { TextContent } from "../TextContent/TextContent";
import type { cardComponentPropsType } from "../../CardItem";

export const CardQuestion: React.FC<cardComponentPropsType> = ({ cardComponentProps }) => {
 const { cardVersion } = cardComponentProps;
 
  return (
    <div className={`card_${cardVersion}_question`}>
      <TextContent cardComponentProps={cardComponentProps} />
    </div>
  );
};
