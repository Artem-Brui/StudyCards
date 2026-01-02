import React from "react";
import { MainContext } from "./context";
import { fetchCards } from "../fetch/fetchCards";


type Props = {
  children: React.ReactNode;
};



export const MainContextProvider: React.FC<Props> = ({ children }) => {
  const cards = fetchCards();


  return (
    <MainContext.Provider value={{cards}}>
      {children}
    </MainContext.Provider>
  );
};
