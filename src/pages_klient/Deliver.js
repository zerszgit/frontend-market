import React from 'react';
import Header from './Header';
import { useNavigate } from "react-router-dom";

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
                <div className="link text-xl flex flex-row" onClick={() => {navigate('/')}}>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FLogout%202.svg?alt=media&token=081db559-59ee-4ef3-8a67-5d37175c148c"
                        alt=""/>
                    <a>Выйти</a>
                </div>
            </div>
        </div>
    );
};

const Delivery = () => {
    return (
        <div>
            <div className=" w-25% pl-10 py-10 ">
                <a>Мои доставки</a>
            </div>
            <div className=' pl-[400px]'>

                {/*карточка*/}

                {/* <div className="flex w-[426px] h-[321px] border-2 border-gray rounded-lg p-4 ">*/}
                {/*    <div className="">*/}
                {/*        <div className="">*/}
                {/*            <a className="py-1 font-bold text-md">Заказ от 18 марта</a>*/}
                {/*        </div>*/}
                {/*        <a className="py-2">Доставка ожидается 20 марта</a>*/}
                {/*        <br />*/}
                {/*        <a className="py-4">1 товар</a>*/}
                {/*        <div className=" flex flex-row">*/}
                {/*            <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FRectangle%2015.png?alt=media&token=e33b3196-97cb-42fe-aacc-0325129c2a3e" alt="" />*/}
                {/*            <a className=" pl-4 py-8">Лист гипсоволокнистый KNAUF <br /> Суперпол, 600*1200*20мм</a>*/}
                {/*        </div>*/}
                {/*        <div className=" py-3 font-bold">*/}
                {/*            <a>610 ₽</a>*/}
                {/*        </div>*/}
                {/*        <div className=" font-light">*/}
                {/*            <a>Заказ оплачен</a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div> */}

                <div className="flex flex-col justify-center items-center ">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FDefault_car_goods_delivery_stylish_illustration_3%201.png?alt=media&token=4aa25e2a-d3ca-4ab7-a1ed-5003e1c71251"
                        alt="#" className='w-[372px] h-[248px] rounded-lg m-10 border-2 border-gray'/>
                    <div className="flex flex-col justify-center items-center">
                        <a className="a1 font-bold">Нет актуальных доставок</a>
                        <br/>
                        <a className="a2">Закажите товары из каталога!</a>
                        <br/>
                        <br/>
                        <button className="gui w-[343px] h-[80px] bg-black text-white rounded-xl"
                                onClick={() => window.location.href = 'catalog.html'}>Перейти в каталог
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
                <PersonalAreaMenu/>
                <Delivery/>
            </div>
        </>
    );
};

export default PersonalAreaPage;
