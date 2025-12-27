import type React from "react";
import styles from "./Tab.module.scss";
import { TabButton } from "../TabButton/TabButton";
import { Pages, type PageLinkType } from "@/pages/pageTypes.ts";

export const Tab: React.FC = () => {
  const pageLink = Object.keys(Pages) as PageLinkType[];

  return (
    <div className={styles.tab}>
      {pageLink.map((link) => {
        return <TabButton key={link} pageLink={link} />;
      })}
    </div>
  );
};
