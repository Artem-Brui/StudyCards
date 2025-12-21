import type React from "react";
import "./AllCards.scss";
import { CardItem } from "../../layout/Header/components/CardItem/CardItem";
import type { CardItemType } from "@/assets/base/base";
import base from "@/assets/base/base.json";

const cards: CardItemType[] = base;

type CardVersionType = "list" | "study";

export type CardContentType = CardItemType & {
 cardVersion: CardVersionType;
}

export const AllCards: React.FC = () => {
  return (
    <ul className="cards-list">
      {cards.map((card) => {
        const cardContent: CardContentType = {
            ...card,
            cardVersion: "list",
        };

        return (
          <li>
            <CardItem key={card.id} cardComponentProps={cardContent} />
          </li>
        );
      })}
      {/* <CardItem cardType="list" card={cards[0]} /> */}
    </ul>
  );
};
