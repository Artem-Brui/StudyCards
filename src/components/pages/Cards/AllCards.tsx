import type React from "react";
import "./AllCards.scss";
import { CardItem } from "../../layout/Header/components/CardItem/CardItem";
import type { CardItemType } from "@/assets/base/base";
import base from "@/assets/base/base.json";

const cards: CardItemType[] = base;

export const AllCards: React.FC = () => {
  return (
    <ul className="cards-list">
      {cards.map((card) => (
        <CardItem key={card.id} cardType="list" card={card} />
      ))}
    </ul>
  );
};
