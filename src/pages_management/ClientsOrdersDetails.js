import React from "react";
import PersonalAreaMenu from "../components/PersonalAreaMenu";
import Header from "../pages_klient/Header";

const ClientsOrdersDetails = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row  ">
        <PersonalAreaMenu />
        <div className="m-8 w-[75%]">
          <div className="font-semibold my-4 ">Заказ по отправлению 123</div>
          <div className="flex flex-row">
            <img src="https://firebasestorage.googleapis.com/v0/b/swiftreplus.appspot.com/o/Compan_data%2Fcompany_logo%2FRectangle%2015.png?alt=media&token=e33b3196-97cb-42fe-aacc-0325129c2a3e" className="w-[168px] h-[165px]" />
            <div className="mx-4">
              <div className="font-medium">Лист гипсоволокнистый KNAUF <br/> Суперпол, 600*1200*20мм</div>
              <div className="flex flex-row text-sm justify-between">
                <div className="flex flex-col ">
                  <div>000-019-228</div>
                  <div>2шт</div>
                </div>
                <div>Бренд: Кнауф</div>
              </div>
              <div>
              <div>18.03.2024</div>
            <div className="flex items-end flex-col">
            <button className="border-black border-2 rounded-2xl px-1 ">Ожидает оплаты</button>
              <div className="font-bold py-1">1220</div>
            </div>
              </div>
              <button className="w-[290px] h-[50px] bg-black text-white rounded-2xl my-6 ">Подтвердить оплату</button>
            </div>
          </div>
          <div className="mx-16">
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsOrdersDetails;
