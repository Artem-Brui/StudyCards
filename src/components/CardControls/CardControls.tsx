import type React from "react";
import styles from "./CardControls.module.scss";
import { buttonStyles } from "@/shared/service";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CardItemType } from "@/assets/base/base";
import { useSearchParams } from "react-router-dom";
import classNames from "classnames";

type Props = {
  cards: CardItemType[];
};

type CardCategories = CardItemType["category"][];

export const CardControls: React.FC<Props> = ({ cards }) => {
  const [params, setParams] = useSearchParams();
  const [isCategoriesList, setIsCategoriesList] = useState(false);

  const categoriesListRef = useRef<HTMLUListElement>(null);
  const categoriesListButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onDown = (event: MouseEvent) => {
     const target = event.target as Node;
 
      if (categoriesListRef.current?.contains(target)) return;
      if (categoriesListButtonRef.current?.contains(target)) return;

      setIsCategoriesList(false);
    };

    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const cardsCategories = cards.reduce((acc, card) => {
    if (acc.some((x) => x === card.category)) return acc;

    return [...acc, card.category];
  }, [] as CardCategories);

  const onMasteredChange = useCallback(() => {
    const newParams = new URLSearchParams(params);
    const isMastered = params.has("mastered");

    if (isMastered) {
      newParams.delete("mastered");
    } else {
      newParams.append("mastered", "true");
    }

    setParams(newParams);
  }, [params, setParams]);

  const onCategoryChange = useCallback(
    (category: CardItemType["category"]) => {
      const newParams = new URLSearchParams(params);
      const categoryToAdd = category.toLowerCase();
      const isHasCategory = newParams
        .getAll("category")
        .some((cat) => cat === categoryToAdd);

      if (isHasCategory) {
        newParams.delete("category", categoryToAdd);
      } else {
        newParams.append("category", categoryToAdd);
      }

      setParams(newParams);
    },
    [params, setParams]
  );

  return (
    <div className={styles.card_controls}>
      <div>
        <button
          className={classNames(buttonStyles.categories)}
          ref={categoriesListButtonRef}
          onClick={() => setIsCategoriesList((x) => !x)}
        >
          {"All Categories"}
        </button>

        <ul
          className={classNames(styles.categories_list, {
            [styles.off]: !isCategoriesList,
          })}
          ref={categoriesListRef}
        >
          {cardsCategories.map((category) => {
            const cardsAmount = cards.filter(
              (x) => x.category === category
            ).length;
            return (
              <li className={styles.category_item} key={category}>
                <label>
                  <input
                    onChange={() => onCategoryChange(category)}
                    className={styles.category_checkbox}
                    type="checkbox"
                  />
                  <p>{category}</p>
                  <p className={styles.cards_amount}>
                    {"("}
                    {cardsAmount}
                    {")"}
                  </p>
                </label>
              </li>
            );
          })}
        </ul>

        <label className={styles.hide_checkbox}>
          <input onChange={onMasteredChange} type="checkbox" />
          <p>Hide Mastered</p>
        </label>
      </div>

      <button className={classNames(buttonStyles.shuffle)}>{"Shuffle"}</button>
    </div>
  );
};
