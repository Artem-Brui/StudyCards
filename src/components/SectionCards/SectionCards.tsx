import type React from "react";
import styles from "./SectionCards.module.scss";
import { CardControls } from "../CardControls/CardControls";
import { ListCards } from "../ListCards/ListCards";
import { useCardsList } from "@/app/customHooks/useCardsList";
import { ErrorComponent } from "../ErrorComponent/ErrorComponent";

export const SectionCards: React.FC = () => {
  const fetchedCards = useCardsList();

  return fetchedCards !== null ? (
    <section className={styles.cards_section}>
      <CardControls cards={fetchedCards} />
      <ListCards />
    </section>
  ) : (
    <ErrorComponent />
  );
};
