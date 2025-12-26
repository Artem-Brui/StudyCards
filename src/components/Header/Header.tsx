import type React from "react";
import "./Header.scss";
import { Logo } from "../Logo/Logo";
import { Tab } from "../Tab/Tab";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
      <Tab />
    </header>
  );
};
