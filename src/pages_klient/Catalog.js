import React from 'react';
import Header from './Header';
import { useNavigate } from "react-router-dom";

const PersonalAreaMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="h-[700px] catalog-left">
            <div className=" border-r-2 w-[400px] h-fll py-14 px-8">
            </div>
            <div style={{marginLeft:"50px"}} className=" text-3xl text-bold mb-8">Каталог</div>

            <div className="catalog-links">
                <div className="catalog-link">
                    <p>Акции и скидки</p>
                    <img src="images/Double Alt Arrow Right.png" alt=""/>
                </div>
                <div className="catalog-link">
                    <p>Строительные материалы</p>
                    <img src="images/Double Alt Arrow Right.png" alt=""/>
                </div>
                <div className="catalog-link">
                    <p>Кровля и фасад</p>
                    <img src="images/Double Alt Arrow Right.png" alt=""/>
                </div>
                <div className="catalog-link">
                    <p>Отделочные материалы</p>
                    <img src="images/Double Alt Arrow Right.png" alt=""/>
                </div>
                <div className="catalog-link">
                    <p>Напольные покрытия</p>
                    <img src="images/Double Alt Arrow Right.png" alt=""/>
                </div>
                <div className="catalog-link">
                    <p>Керамическая плитка</p>
                    <img src="images/Double Alt Arrow Right.png" alt=""/>
                </div>
                <div className="catalog-link">
                    <p>Керамическая плитка</p>
                    <img src="images/Double Alt Arrow Right.png" alt=""/>
                </div>
                <div className="catalog-link">
                    <p>Сантехника</p>
                    <img src="images/Double Alt Arrow Right.png" alt=""/>
                </div>
                <div className="catalog-link">
                    <p>Коммуникации, отопление</p>
                    <img src="images/Double Alt Arrow Right.png" alt=""/>
                </div>
                <div className="catalog-link">
                    <p>Освещение и электрика</p>
                    <img src="images/Double Alt Arrow Right.png" alt=""/>
                </div>
                <div className="catalog-link">
                    <p>Электроинструмент</p>
                    <img src="images/Double Alt Arrow Right.png" alt=""/>
                </div>
                <div className="catalog-link">
                    <p>Крепеж и скобянка</p>
                    <img src="images/Double Alt Arrow Right.png" alt=""/>
                </div>
            </div>
        </div>
    );
};


const ProfileSettings = () => {
    return (
        <div className=" px-10 py-10">
            <div className=" mb-10">
                <div className="flex flex-col">
                    <div className=" my-4 font-medium ">
                        <a>Гипсокартон (ГКЛ)</a>
                    </div>
                    <div className="cardss">
                        <img src="images/Group 11.png" alt=""/>
                        <img src="images/Group 11.png" alt=""/>
                        <img src="images/Group 11.png" alt=""/>
                        <img src="images/Group 11.png" alt=""/>
                        <img src="images/Group 11.png" alt=""/>
                        <img src="images/Group 11.png" alt=""/>
                        <img src="images/Group 11.png" alt=""/>
                        <img src="images/Group 11.png" alt=""/>
                        <img src="images/Group 11.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};




const PersonalAreaPage = () => {
    return (
        <>
            <Header/>
            <div className='flex '>
                <PersonalAreaMenu />
                <ProfileSettings/>
            </div>
        </>
    );
};

export default PersonalAreaPage;
