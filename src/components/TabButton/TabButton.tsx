import type React from "react";
import styles from "./TabButton.module.scss";
import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import { Pages } from "@/pages/pageTypes";

type Props = {
  pageLink: keyof typeof Pages;
};

export const TabButton: React.FC<Props> = ({ pageLink }) => {
  const pagePath = pageLink === "cards" ? pageLink : "";
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
      {Pages[pageLink]}
    </NavLink>
  );
};
