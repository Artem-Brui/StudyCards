import type React from "react";
import "./CardItem.scss";
import { CardQuestion } from "./components/CardQuestion/CardQuestion";
import { CardAnswer } from "./components/CardAnswer/CardAnswer";
import { CardCategory } from "./components/CardCategory/CardCategory";
import { CardProgress } from "./components/CardProgress/CardProgress";
import { CardServiceButton } from "./components/CardServiceButton/CardServiceButton";
import type { CardItemType } from "@/assets/base/base";

export type CardVersionType = "list" | "study";

type СardComponentProps = {
  card: CardItemType;
  cardVersion: CardVersionType;
};

export const CardItem: React.FC<СardComponentProps> = ({
  cardVersion,
  card,
}) => {
  const { question, answer, category } = card;
  const isStudy = cardVersion === 'study';

  return (
    // <div className={`card_item-${cardVersion}`}>
    //   <CardQuestion cardVersion={cardVersion} question={question} />
    //   <CardAnswer cardVersion={cardVersion} answer={answer + answer + answer + answer + answer + answer} />
    //   <CardCategory cardVersion={cardVersion} category={category} />
    //   <CardProgress cardVersion={cardVersion} />
    //   <CardServiceButton />
    // </div>
    <article>
      <p>{question}</p>
      <p>{answer}</p>
      <p>{category}</p>
      <p>Progress</p>
      {!isStudy && <button className="card-service-button"></button>}
    </article>
  );
};
