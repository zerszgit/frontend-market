import React from 'react';
import Header from './Header';


const Advertising = () => {
    return <div className="bg-gray-800 h-24"></div>;
};

const SpecialOffers = () => {
    return (
        <div className="p-0 md:p-24">
            <div className="text-center text-white text-2xl font-bold">
                Специальные предложения!
            </div>
        </div>
    );
};

const SaleProduct = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {[1, 2, 3, 4].map((index) => (
                <div key={index} className="p-4">
                    <div className="bg-white rounded-lg shadow-lg p-4">
                        <img src="/photo_product/00001.png" alt="#" className="w-24 h-24 mx-auto" />
                        <br />
                        <div className="text-center text-gray-700 mt-2">
                            Лист гипсоволокнистый
                            <br />
                            KNAUF
                            <br />
                            Суперпол,
                            <br />
                            600*1200*20мм
                        </div>
                        <br />
                        <div className="text-center text-gray-700 font-bold">610 ₽</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ShowcaseHome = () => {
    return (
        <>
            <hr className="my-8 border-gray-300" />
            <div className="p-0 md:p-24">
                <div className="text-2xl font-bold mb-4">Возможно, вам понравится</div>
                <div className="flex flex-wrap justify-center">
                    {[1, 2, 3, 4].map((index) => (
                        <div key={index} className="p-4">
                            <div className="bg-white rounded-lg shadow-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <img
                                        src="/photo_product/00001.png"
                                        alt="#"
                                        className="w-24 h-24 mr-2"
                                    />
                                    <button
                                        className="w-8 h-8 flex items-center justify-center bg-transparent border-none focus:outline-none"
                                        aria-label="Отправить реакцию «нравится»"
                                    >
                                        <svg
                                            width="19"
                                            height="17"
                                            viewBox="0 0 19 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.8398 2.39496C13.013 -0.169205 10.2871 2.03882 9.27755 3.46336C8.26797 2.03882 5.54163 -0.169205 2.71481 2.39496C-0.112011 4.95912 1.87349 8.80536 3.2196 10.408C4.22918 11.6544 6.85456 14.361 9.27755 15.2158C11.7005 14.361 14.3254 11.6544 15.335 10.408C16.6811 8.80536 18.6666 4.95912 15.8398 2.39496Z"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="text-gray-700 mb-2">
                                    <div className="font-bold">610 ₽</div>
                                    <div className="text-sm">шт.</div>
                                </div>
                                <div className="text-gray-700 mb-2">
                                    Лист гипсоволокнистый KNAUF Суперпол, 600*1200*20мм
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <div className="mr-2">5.0</div>
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((index) => (
                                                <img
                                                    key={index}
                                                    src="svg/Star.svg"
                                                    alt="star"
                                                    className="w-4 h-4 mr-1"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <img src="svg/Cart_dy.svg" alt="cart" className="w-8 h-8" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const PersonalArea = () => {
    return (
        <>
            <Header />
            <SpecialOffers />
            <SaleProduct />
            <ShowcaseHome />
        </>
    );
};

export default PersonalArea;

