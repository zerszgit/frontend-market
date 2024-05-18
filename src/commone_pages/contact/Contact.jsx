import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.css";
import { Header } from "../header/Header";
import newsPhoto1 from "../../img/logo_2.jpg";
import newsPhoto2 from "../../img/Event.png";
import allowImg from "../../img/Vector.png";
import phone from '../../svg/Star.svg'
export const News = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1400 });

  return (
    <div className={styles["news_page"]}>
      <Header />
      <div className={styles["common_page_main"]}>
        <div className={styles["common_page_bg-container"]}>
          {/* <img src={newsBg} alt="bg" className={styles["news_page-bg"]} /> */}
          {/* <div className={styles["common_page_bg-blue-layer"]} /> */}
          <span>Контакты</span>
          <img
            src={allowImg}
            alt="allow"
            className={styles["news_page-allow"]}
          />
        </div>
        <div className={styles["news_container"]}>
          <div className={styles["news_container-item"]}>

            <img
              src={newsPhoto1}
              alt="photo_news"
              className={styles["news_container-item-img"]}
            />

          </div>
          <div style={{ display: 'flex', flexDirection: 'row' , marginBottom:10 }}> <img src='https://www.svgrepo.com/show/111201/phone-call.svg' width={20} height={20} />
            <p style={{ marginLeft: 10 }}>Телефон: 8 (800) 511-10-55</p></div>
            <div style={{ display: 'flex', flexDirection: 'row' ,  marginBottom:10 }}> <img src='https://www.svgrepo.com/show/111201/phone-call.svg' width={20} height={20} />
            <p style={{ marginLeft: 10 }}>Телефон: 8 (800) 511-30-24</p></div>
            <div style={{ display: 'flex', flexDirection: 'row' }}> <img src='https://www.svgrepo.com/show/342010/mail-ru.svg' width={20} height={20} />
            <p style={{ marginLeft: 10 }}>Email: admin@krtpark.ru</p></div>
            
        </div>

      </div>
    </div>
  );
};

export default News;
