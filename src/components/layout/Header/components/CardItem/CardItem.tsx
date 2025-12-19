import type React from "react";
import "./CardItem.scss";
import base from "@/assets/base/base.json";
import type { CardItemType } from "@/assets/base/base";

const cards: CardItemType[] = base;

const card = cards[0];
export const CardItem: React.FC = () => {
  const { id, category, question, answer, mastered } = card;

  return (
    <div className="card-item">
      <section className="card-question">
        <h3>{question}</h3>
      </section>

      <section className="card-answer">
        <h5>Answer:</h5>
        <p>{answer}</p>
      </section>

      <section className="card-service">
        <div className="card-category">{category}</div>
        <div className="card-progress">Progress</div>
        <div className="card-service-button"></div>
      </section>
    </div>
  );
};
