import React from 'react';
import Header from './Header';
import {useNavigate} from "react-router-dom";

const PersonalAreaMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-[700px] " >
            <div className=" border-r-2 border-gray w-[300px] h-fll py-14 px-8">
                <div className=" text-3xl text-bold mb-8"
                     onClick={() => window.location.href = 'personal_area.html'}>Личный кабинет
                </div>
                <div className="link text-xl mb-8" onClick={() => navigate('/PersonalDetails')}>Мои данные</div>
                <div className="link text-xl mb-8" onClick={() => navigate('/Cart_edit')}>Способы оплаты</div>
                <div className="link text-xl mb-8" onClick={() => navigate('/Purchases')}>Покупки</div>
                <div className="link mb-8 text-xl" onClick={() => navigate('/delivery')}>Доставки</div>
                <div className="link text-xl flex flex-row" onClick={() => {
                    navigate('/')
                }}>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FLogout%202.svg?alt=media&token=081db559-59ee-4ef3-8a67-5d37175c148c"
                        alt=""/>
                    <a>Выйти</a>
                </div>
            </div>
        </div>
    );
};

const CartEdit = () => {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <div className="">
                    <div className="" style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <a style={{fontSize: '20px', marginLeft: '40px', marginTop: '40px'}}>Способы оплаты</a>
                    </div>
                    <div className="" style={{fontSize: '20px', marginLeft: '40px'}}>
                        <div className="" style={{fontSize: '16px', marginTop: '20px', marginBottom: '130px', display: "flex", alignItems: "center"}}>
                            <p>Мир *9033</p>
                            <img src="images/Line 18.png" style={{margin:"0 18px"}} alt=""/>
                            <img src="images/Trash Bin Trash.png" style={{cursor: "pointer"}} alt="del"/>
                        </div>
                        </div>

                    <div className="" style={{marginLeft: "40px"}}>
                        <div className="" className="" style={{marginBottom: "20px"}}>
                            <p style={{fontSize: '20px'}}>Добавить карту</p>
                        </div>
                        <div className="card">
                            <img src="images/carts.png" alt="#"/>
                            <div className="numberCard">
                                <p>Номер карты</p>
                                <input type="number"/>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", width:"100%"}}>
                                <div className="date">
                                    <p>Действует до</p>
                                    <div style={{display: "flex"}}>
                                        <input type="text" maxLength={2} placeholder="ММ"/>
                                        <p style={{padding: "0 10px"}}> / </p>
                                        <input type="text" maxLength={2} placeholder="ГГ"/>
                                    </div>
                                </div>
                                <div className="cvv">
                                    <p>CVV/CVC</p>
                                    <input type="text" maxLength={2} placeholder="ММ"/>
                                </div>
                            </div>
                        </div>
                        <button className="w-[342px] h-[80px] bg-black text-white rounded-lg">
                            Добавить карту
                        </button>
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
                <CartEdit />
            </div>
        </>
    );
};

export default PersonalAreaPage;
