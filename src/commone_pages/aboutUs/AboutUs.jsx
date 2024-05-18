import React from "react";
import { Header } from "../header/Header";
import logo from "../../img/Link → photo.png.png";
import styles from './style.module.css'
const AboutUs = () => {
  return (
    <div style={{ background: '#e0e0e0', height: '100%', paddingBottom: 100, paddingTop: 500 }}>
      <div style={{ width: '100%', position: 'absolute', zIndex: 999, top: 0 }}>
        <Header />
      </div>
      <div style={{ width: '100%', height: 300, background: '#7395a3', position: 'absolute', top: 80, zIndex: 1, borderRadius: 30, paddingTop: 50 }} className={styles["cont-title"]}>

        <img src={logo} style={{ margin: 'auto' }} />
        <h1 style={{ color: '#fff', textAlign: 'center', fontWeight: '600', fontSize: 30 }}>Торговый парк «КРТ»</h1>
        <h3 style={{ color: '#fff', textAlign: 'center', fontWeight: '600', fontSize: 20 }}>крупнейший оптовый маркетплейс строительных товаров</h3>
      </div>
      <div style={{ width: '90%', margin: 'auto', background: '#efefef', borderRadius: 50, padding: 30, border: '1px solid #ffffff' }}>
        <img src='https://i.pinimg.com/564x/71/09/0a/71090acbde98fb6476dd1821320d1795.jpg' style={{ width: '95%', margin: 'auto', background: '#fdfdfd', padding: 20, borderRadius: 50, marginTop: 50 }} />
        <p style={{ marginTop: 20 }}>Наше предназначение заключается в содействии успешному росту
          и развитию строительного бизнеса и отрасли в целом через повышение
          эффективности путем внедрения комплексных инновационных решений.
        </p>
        <br />
        <p>Здесь собраны лучшие предложения от проверенных продавцов.

          Также у нас крупнейшая площадка по продаже, участков под застройку.
          Нет больше необходимости искать товары, материалы, технику, в разных
          местах. Мы создали уникальную систему, комфортную для всех
          участников. Покупатели получат удобный сервис, безопасную оплату,
          огромный ассортимент. Продавцы – высокие продажи, снижение затрат
          на рекламу, логистику и узнаваемость бренда. Выбирайте лучшие
          условия и цены от разных поставщиков в КРТ парке.</p>
      </div>
    </div>
  );
};

export default AboutUs;
