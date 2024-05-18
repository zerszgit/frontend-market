import React from 'react'
import styles from './style.module.css'
import Header from '../header/Header'
import allowImg from "../../img/Vector.png";
import truck from '../../img/Default_truck_CAR_stylish_illustration_3.jpg'
import construction from '../../img/Default_construction_land_stylish_illustration_0.jpg'
import constland from '../../img/Default_construction_land_stylish_illustration_0.jpg'
export default function Park() {
    return (
        <div >
            <Header />
            <div className={styles['common_page_main']}>
                <div className={styles['common_page_bg-container']}>


                    <span>Торговый парк</span>
                    <img
                        src={allowImg}
                        alt="allow"
                        className={styles["news_page-allow"]}
                    />
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} className={styles['cont-cards']}>
                <div style={{ width: '30%', marginTop: 30 }}>
                        <img src={truck} style={{ width: 157, height: 157, borderRadius: 157, margin: 'auto' }} />
                        <p style={{ fontSize: 'large', fontWeight: '600', width: '50%', textAlign: 'center', margin: 'auto', marginTop: 16, marginBottom: 32, }}>ТРАНСПОРТНЫЕ КОМПАНИИ</p>
                        <button style={{ width: '80%', background: '#242424', borderRadius: 10, color: '#fff', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>Перейти</button>
                    </div>
                    <div style={{ width: '30%', marginTop: 30 }}>
                        <img src={construction} style={{ width: 157, height: 157, borderRadius: 157, margin: 'auto' }} />
                        <p style={{ fontSize: 'large', fontWeight: '600', width: '50%', textAlign: 'center', margin: 'auto', marginTop: 16, marginBottom: 32, }}>УЧАСТКИ ПОД ЗАСТРОЙКУ</p>
                        <button style={{ width: '80%', background: '#242424', borderRadius: 10, color: '#fff', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>Перейти</button>
                    </div>
                    <div style={{ width: '30%', marginTop: 30 }}>
                        <img src={constland} style={{ width: 157, height: 157, borderRadius: 157, margin: 'auto' }} />
                        <p style={{ fontSize: 'large', fontWeight: '600', width: '50%', textAlign: 'center', margin: 'auto', marginTop: 16, marginBottom: 32, }}>СТРОИТЕЛЬНЫЕ МАТЕРИАЛЫ</p>
                        <button style={{ width: '80%', background: '#242424', borderRadius: 10, color: '#fff', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>Перейти</button>
                    </div>


                </div>
            </div>
        </div>
    )
}
