import type React from "react";
import "./CardItem.scss";
import { CardQuestion } from "./components/CardQuestion/CardQuestion";
import { CardAnswer } from "./components/CardAnswer/CardAnswer";
import { CardCategory } from "./components/CardCategory/CardCategory";
import { CardProgress } from "./components/CardProgress/CardProgress";
import { CardServiceButton } from "./components/CardServiceButton/CardServiceButton";
import type { CardContentType } from "@/components/pages/Cards/AllCards";

export type cardComponentPropsType = {
 cardComponentProps: CardContentType;
}

export const CardItem: React.FC<cardComponentPropsType> = ({ cardComponentProps }) => {
 const { cardVersion } =  cardComponentProps;

  return (
    <div className={`card_item-${cardVersion}`}>
      <CardQuestion cardComponentProps={cardComponentProps} />
      <CardAnswer cardComponentProps={cardComponentProps} />
      <CardCategory cardComponentProps={cardComponentProps} />
      <CardProgress cardComponentProps={cardComponentProps} />
      <CardServiceButton />
    </div>
  );
};
