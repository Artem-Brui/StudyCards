import type React from "react";
import "./CardsList.scss";
import { CardItem } from "../CardItem/CardItem";
import type { CardItemType } from "@/assets/base/base";
import base from "@/assets/base/base.json";

const cards: CardItemType[] = base;

export const CardsList: React.FC = () => {
  return (
    <ul className="cards-list">
      {cards.map((card) => {
        return (
          <li key={card.id}>
            <CardItem cardVersion="list" card={card} />
          </li>
        );
      })}
    </ul>
  );
};
