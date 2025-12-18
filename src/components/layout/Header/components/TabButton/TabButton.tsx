import type React from "react";
import "./TabButton.scss";
import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import { Pages } from "../../../../pages/pageTypes";

type Props = {
 pageKey: keyof typeof Pages;
};

export const TabButton: React.FC<Props> = ({ pageKey }) => {
 const pagePath = pageKey === 'cards' ? pageKey : '';
 const location = useLocation().pathname.slice(1);
 const isHighlighted = pagePath === location;
 
  return (
   <NavLink to={`/${pagePath}`} className={classNames({ tabButton: true, highlighted: isHighlighted})}>{Pages[pageKey]}</NavLink>
  );
};