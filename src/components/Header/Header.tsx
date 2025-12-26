import type React from "react";
import styles from "./Header.module.scss";
import { Logo } from "../Logo/Logo";
import { Tab } from "../Tab/Tab";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Tab />
    </header>
  );
};
