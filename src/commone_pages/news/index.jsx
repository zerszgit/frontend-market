import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.css";
import { Header } from "../header/Header";
import newsPhoto1 from "../../img/Putin.png";
import newsPhoto2 from "../../img/Event.png";
import allowImg from "../../img/Vector.png";

export const News = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1400 });

  return (
    <div className={styles["news_page"]}>
      <Header />
      <div className={styles["common_page_main"]}>
        <div className={styles["common_page_bg-container"]}>
          {/* <img src={newsBg} alt="bg" className={styles["news_page-bg"]} /> */}
          {/* <div className={styles["common_page_bg-blue-layer"]} /> */}
          <span>НОВОСТИ</span>
          <img
            src={allowImg}
            alt="allow"
            className={styles["news_page-allow"]}
          />
        </div>
        <div className={styles["news_container"]}>
          <div className={styles["news_container-item"]}>
            <div className={styles["news_container-item-block"]}>
              {isSmallScreen && (
                <img
                  src={newsPhoto1}
                  alt="photo_news"
                  className={styles["news_container-item-img"]}
                />
              )}
              <h1 className={styles["news_container-item-title"]}>
                <b>
                  Путин подписал закон о механизме комплексного развития
                  территорий
                </b>
                <h4>25.02.2024</h4>
              </h1>
              <span>
                Президент России Владимир Путин подписал закон о синхронизации
                комплексного развития территорий (КРТ) с программами
                модернизации социальной, коммунальной и транспортной
                инфраструктуры, который предусматривает, что застройщик будет
                подстраиваться под планы муниципалитета.
              </span>
              <button className={styles["black_btn"]}>Читать</button>
            </div>
            {!isSmallScreen && (
              <img
                src={newsPhoto1}
                alt="photo_news"
                className={styles["news_container-item-img"]}
              />
            )}
          </div>
          <div className={styles["news_container-item"]}>
            {isSmallScreen && (
              <img
                src={newsPhoto2}
                alt="photo_news"
                className={styles["news_container-item-img"]}
              />
            )}
            <div className={styles["news_container-item-block"]}>
              <h1 className={styles["news_container-item-title"]}>
                <b>
                  22 ноября 2023 года состоится I Всероссийский конгресс по
                  комплексному развитию территорий
                </b>
                <h4>09.02.2023</h4>
              </h1>
              <span>
                Уважаемые коллеги! 22 ноября 2023 года в Москве в здании
                Цифрового делового пространства (ул. Покровка, д. 47) состоится
                I Всероссийский конгресс по комплексному развитию территорий.
              </span>
              <button className={styles["black_btn"]}>Читать</button>
            </div>
            {!isSmallScreen && (
              <img
                src={newsPhoto2}
                alt="photo_news"
                className={styles["news_container-item-img"]}
              />
            )}
          </div>
        </div>{" "}
        *
      </div>
    </div>
  );
};

export default News;
