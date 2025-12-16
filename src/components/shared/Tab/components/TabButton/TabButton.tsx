import type React from "react";
import "./TabButton.scss";
import classNames from "classnames";

type Props = {
  title: string;
  isHighlighted: boolean;
};

export const TabButton: React.FC<Props> = ({ title, isHighlighted }) => {

 return (
  <button className={classNames({ 'tabButton': true, 'highlighted': isHighlighted })}>
  {title}
 </button>)
};
