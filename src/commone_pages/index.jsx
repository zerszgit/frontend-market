import React from "react";
import { Header } from "./header/Header";
import styles from "./style.module.css";
import defaultBg from "../img/defaultBg.png"; // импортируем изображение
import logo from "../img/logo-big.svg"; // импортируем изображение
import { MainContent } from "./main";

export const HomePage = () => {
  return (
    <div className={styles["common_page"]}>
      {/* background */}
      <img src={defaultBg} alt="bg" className={styles["common_page-bg"]} />
      <div className={styles["common_page_bg-blue-layer"]} />

      <Header />
      <div className={styles["common_page-body"]}>
        <img src={logo} alt="logo" className={styles["common_page-logo"]} />
      </div>
    </div>
  );
};

// todo получится ли установить bg только через css к common_page ?
