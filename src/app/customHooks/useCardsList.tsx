import { useContext } from "react"
import { MainContext } from "../context/context"

export const useCardsList = () => {
  const context = useContext(MainContext);
  const cards = context?.cards;

  return cards ? cards : null;
}