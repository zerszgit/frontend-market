import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.css";
import { Header } from "../header/Header";
import logo from "../../img/logo.jpg";
import alfa from '../../img/12.jpg'
import image from '../../img/image.png'
export const News = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1400 });

  return (
    <div className={styles.news_page}>
      <Header />
      <div>
        <p style={{ textAlign: 'center', marginTop: 50 }}>ПАРТНЕРЫ</p>
        <div style={{ paddingLeft: 200, paddingRight: 200, paddingTop: 50, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src='https://media.samolet.ru/core/logo/logo_block/Group_25941.svg' width={140} height={100} className={styles.logo_p} />
          <img src='https://xn--80axgaaqjw.xn--p1ai/img/cms/newimg/noviy-logotip-sberbanka_1.png' width={'160px'} height={'80px'} className={styles.logo_p} style={{ marginLeft: 40, resize: 'cover' }} />
          <img src='https://www.cedrus.ru/bitrix/templates/images/logo.jpg' width={160} height={80} className={styles.logo_p} style={{ marginLeft: 40 }} />
          <img src='https://toplogos.ru/images/logo-dom-rf.png' width={160} height={80} className={styles.logo_p} style={{ marginLeft: 40 }} />
          <img src='https://congress-krt.ru/wp-content/uploads/2023/09/lenmontazh-1024x518.png' width={160} height={80} className={styles.logo_p} style={{ marginLeft: 40 }} />
          <img src='https://d2d2yzufo5fwh3.cloudfront.net/images/feature_variant/23/logo_veka.png?t=1570707042' width={160} height={80} className={styles.logo_p} style={{ marginLeft: 40 }} />
          <img src='https://upload.wikimedia.org/wikipedia/commons/2/29/P%40%D0%B4_%D0%BB%D0%BE%D0%B3%D0%BE_%D1%81%D0%B8%D0%BD%D0%B8%D0%B9_%D0%B1%D0%B5%D0%B7_%D0%B4%D0%B5%D1%81%D0%BA%D1%80%D0%BF%D1%82.png' width={160} height={80} className={styles.logo_p} style={{ marginLeft: 40 }} />
          <img src={logo} width={160} height={80} className={styles.logo_p} style={{ marginLeft: 40 }} />
          <img src={image} width={160} height={80} className={styles.logo_p} style={{ marginLeft: 40 }} />
          <img src={alfa} width={160} height={80} className={styles.logo_p} style={{ marginLeft: 40 }} />

        </div>
      </div>
    </div>
  );
};

export default News;
