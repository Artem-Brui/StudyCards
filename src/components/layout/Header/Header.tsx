import type React from "react";
import "./Header.scss";
import { Tab } from "./components/Tab/Tab";
import { Logo } from "./components/Logo/Logo";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
      <Tab />
    </header>
  );
};
