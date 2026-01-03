import type React from "react";
import styles from "./ListCards.module.scss";
import { CardItem } from "../CardItem/CardItem";
import { useCardsList } from "@/app/customHooks/useCardsList";

export const ListCards: React.FC = () => {
  const fetchedCards = useCardsList();
  const cards = fetchedCards ? fetchedCards : [];

  return (
    <ul className={styles.cards_list}>
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
