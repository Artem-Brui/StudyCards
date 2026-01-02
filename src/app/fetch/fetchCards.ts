import base from "@/assets/base/base.json";
import type { CardItemType } from "@/assets/base/base";


export const fetchCards = () => {
  const cards: CardItemType[] = base;

  return cards;
}