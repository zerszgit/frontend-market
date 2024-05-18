import React from "react";
import styles from "../style.module.css";
import logo from "../../img/Link → photo.png.png"; // импортируем изображение
import { Link } from "react-router-dom";

export const Header = () => {
  const test = "";
  return (
    <header className={styles["header"]} >
      <div className={styles["header-left-side"]}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles["header-logo"]} />
        </Link>
      </div>
      <div className={styles["header-links"]}>
        <Link to="/AboutUs">О НАС</Link>
        <Link to="/News">НОВОСТИ</Link>
        <Link to="/Partners">ПАРТНЕРЫ</Link>
        <Link to="/Contacts">КОНТАКТЫ</Link>
        <Link to="/Park">ТОРГОВЫЙ ПАРК</Link>
      </div>
      <div className={styles["header-right"]}>
        <Link to="/Home">ВХОД В ЛК</Link>
      </div>
    </header>
  );
};
export default Header;
