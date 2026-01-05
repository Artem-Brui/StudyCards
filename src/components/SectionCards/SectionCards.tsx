import type React from "react";
import styles from "./SectionCards.module.scss";
import { CardControls } from "../CardControls/CardControls";
import { ListCards } from "../ListCards/ListCards";

export const SectionCards: React.FC = () => {
  return (
    <section className={styles.cards_section}>
      <CardControls />
      <ListCards />
    </section>
  );
};
