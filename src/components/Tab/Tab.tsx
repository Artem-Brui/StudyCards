import type React from "react";
import "./Tab.scss";
import { TabButton } from "../TabButton/TabButton";
import { Pages, type PageLinkType } from "@/pages/pageTypes.ts";

export const Tab: React.FC = () => {
  const pageKeys = Object.keys(Pages) as PageLinkType[];

  return (
    <div className="tab">
      {pageKeys.map((key) => {
        return <TabButton key={key} pageKey={key} />;
      })}
    </div>
  );
};
