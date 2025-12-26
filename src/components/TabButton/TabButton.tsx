import type React from "react";
import styles from "./TabButton.module.scss";
import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import { Pages } from "@/pages/pageTypes";

type Props = {
  pageKey: keyof typeof Pages;
};

export const TabButton: React.FC<Props> = ({ pageKey }) => {
  const pagePath = pageKey === "cards" ? pageKey : "";
  const location = useLocation().pathname.slice(1);
  const isHighlighted = pagePath === location;

  return (
    <NavLink
      to={`/${pagePath}`}
      className={classNames({
        [styles.tab_button]: true,
        [styles.highlighted]: isHighlighted,
      })}
    >
      {Pages[pageKey]}
    </NavLink>
  );
};
