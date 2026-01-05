import type React from "react";
import styles from "./SectionStatisticBar.module.scss";
import { useCardsList } from "@/app/customHooks/useCardsList";
import { getStatisticBarData } from "./service";
import classNames from "classnames";

export const SectionStatisticBar: React.FC = () => {
  const fetchedCards = useCardsList();
  const cards = fetchedCards ? fetchedCards : [];
  const statisticBarData = getStatisticBarData(cards);

  return (
    <section className={styles.stat_bar_section} data-section="statistics">
      <h2 className={styles.bar_title}>Study Statistics</h2>
      <div className={styles.stat_item_container}>
        {statisticBarData.map((dataItem) => {
          
          return (
            <article key={dataItem.title} className={styles.stat_item}>
              <p className={styles.title}>{dataItem.title}</p>
              <p className={styles.value}>{dataItem.value}</p>
              <i className={classNames({[styles.icon]: true, [styles[dataItem.icon]]: true}) } data-icon={dataItem.icon}></i>
            </article>
          );
        })}
      </div>
    </section>
  );
};
