import type React from "react";
import styles from "./SectionStatisticBar.module.scss";
import { useCardsList } from "@/app/customHooks/useCardsList";
import { getStatisticBarData } from "./service";

export const SectionStatisticBar: React.FC = () => {
  const fetchedCards = useCardsList();
  const cards = fetchedCards ? fetchedCards : [];

  const statisticBarData = getStatisticBarData(cards);

  return (
    <section className={styles.statistics_section} data-section="statistics">
      <h2 className={styles.title}>Study Statistics</h2>

      {statisticBarData.map((dataItem) => {
        return (
          <article key={dataItem.title} className={styles.statistics_bar_item}>
            <p className={styles.statistics_title}>{dataItem.title}</p>
            <p className={styles.statistics_value}>{dataItem.value}</p>
            <i className={styles.statistics_icon} data-icon={dataItem.icon}></i>
          </article>
        );
      })}
    </section>
  );
};
