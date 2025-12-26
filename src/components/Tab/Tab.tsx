import type React from "react";
import styles from "./Tab.module.scss";
import { TabButton } from "../TabButton/TabButton";
import { Pages, type PageLinkType } from "@/pages/pageTypes.ts";

export const Tab: React.FC = () => {
  const pageKeys = Object.keys(Pages) as PageLinkType[];

  return (
    <div className={styles.tab}>
      {pageKeys.map((key) => {
        return <TabButton key={key} pageKey={key} />;
      })}
    </div>
  );
};
