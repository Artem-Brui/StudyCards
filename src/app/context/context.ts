import type { CardItemType } from "@/assets/base/base";
import { createContext } from "react";


type MainContextType = {
  cards: CardItemType[];
};

export const MainContext = createContext<MainContextType | null>(null);