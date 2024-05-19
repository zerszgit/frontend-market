import React from 'react';
import Header from './Header';
import { useNavigate } from "react-router-dom";

const PersonalAreaMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="h-[700px] " >
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


const ProfileSettings = () => {
    return (
        <div className=" px-10 py-10">
            <div className=" mb-10">
                <div className="flex flex-col">
                    <div className=" my-4 font-medium ">
                        <a>Мои данные</a>
                    </div>
                    <div className=" my-6 font-medium">
                        <a>Личная информация</a>
                    </div>
                    
                </div>
                <div className="flex flex-row">
                    <div className=" w-[367px] h-[97px] border-2 border-gray rounded-2xl  flex justify-center items-center flex-col">
                        <div className=" ">
                            <a>Имя</a>
                        </div>
                        <input type="name" name="name" placeholder="Иванов Иван" className="tlk-input text-center" required />
                    </div>
                    <div className=" w-[367px] h-[97px] border-2 border-gray rounded-2xl  flex justify-center items-center flex-col ml-10">
                        <div className="">
                            <a>Email</a>
                        </div>
                        <input type="login" name="login" placeholder="janedoe@mail.com" className="tlk-input text-center" required />
                    </div>
                </div>
                <div className="flex flex-row my-6">
                <div className=" w-[367px] h-[97px] border-2 border-gray rounded-2xl  flex justify-center items-center flex-col  ">
                        <div className="">
                            <a>Телефон</a>
                        </div>
                        <input type="phone" name="phone" placeholder="+7 (900) 000-00-00" className="tlk-input text-center" required />
                    </div>
                    <div className=" w-[367px] h-[97px] border-2 border-gray rounded-2xl  flex justify-center items-center flex-col ml-10">
                        <div className="">
                            <a>ИНН</a>
                        </div>
                        <input type="INN" name="INN" placeholder="0000000000" className="tlk-input text-center" required />
                    </div>
                </div>
            </div>
           
            <div className="">
                <div className=" font-medium mb-4">
                    <a>Изменить пароль</a>
                </div>
                <div className=" flex flex-row">
                    <div className="w-[195px]">
                        <input className='w-[195px] h-[60px] border-gray border-2 rounded-lg'/>
                        <div className=" text-center">
                            <a>Старый пароль</a>
                        </div>
                        <div className="">
                            <input type="password" name="old_password" placeholder="" />
                        </div>
                    </div>
                    <div className=" w-[195px] mx-6">
                        <input className='w-[195px] h-[60px] border-gray border-2 rounded-lg'/>
                        <div className=" text-center">
                            <a>Новый пароль</a>
                        </div>
                        <div className="">
                            <input type="password" name="old_password" placeholder="" />
                        </div>
                    </div>
                    <div className=" w-[195px] ">
                        <input className='w-[195px] h-[60px] border-gray border-2 rounded-lg'/>
                        <div className=" text-center">
                            <a>Повторите пароль</a>
                        </div>
                        <div className="">
                            <input type="password" name="old_password" placeholder="" />
                        </div>
                    </div>
                  
                </div>
            </div>
            <button className=" w-[342px] h-[80px] bg-black text-white rounded-lg">Сохранить изменения</button>
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
