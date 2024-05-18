import React from 'react';
import '../style_setting_pc.css';


const MenuPersonalArea = () => {
    return (
        <div className=" flex-1 flex flex-row">
            <div className=" border-2 border-gray">
                <div className="">Каталог</div>
                <div className="">
                    <hr />
                    <div className="">
                        <div className="">Акции и скидки</div>
                        <span>&gt;</span>
                    </div>
                </div>
                <div className="">
                    <hr />
                    <div className="">
                        <div className="">Строительные материалы</div>
                        <span>&gt;</span>
                    </div>
                </div>
                <div className="">
                    <hr />
                    <div className="">
                        <div className="">Кровля и фасад</div>
                        <span>&gt;</span>
                    </div>
                </div>
                <div className="">
                    <hr />
                    <div className="">
                        <div className="">Отделочные материалы</div>
                        <span>&gt;</span>
                    </div>
                </div>
                {/* Repeat the above structure for other categories */}
            </div>
            <div className="">
                <div className="">
                    <div className="">
                        <span>&lt;</span>
                        <div className="" style={{ marginRight: '90px', fontWeight: 600 }}>Строительные материалы</div>
                    </div>
                    <hr />
                    <div className="">
                        <div className="">Гипсокартон (ГКЛ)</div>
                        <span>&gt;</span>
                    </div>
                </div>
                <div className="">
                    <hr />
                    <div className="">
                        <div className="">Древесно-плитный материал</div>
                        <span>&gt;</span>
                    </div>
                </div>
                <div className="">
                    <hr />
                    <div className="">
                        <div className="">Металлопрокат</div>
                        <span>&gt;</span>
                    </div>
                </div>
                {/* Repeat the above structure for other category paths */}
            </div>
            <div className="">
                <div className="">
                    <div className="" onClick={() => window.location.href = 'cart_product.html'}>
                        <img className="" src="/photo_product/00001.png" alt="#" />
                    </div>
                    <br />
                    <div className="" onClick={() => window.location.href = 'cart_product.html'}>Лист гипсоволокнистый  KNAUF <br /> Суперпол, 600*1200*20мм </div>
                    <div className="" onClick={() => window.location.href = 'cart_product.html'}>
                        <div className="">
                            <div className="">
                                <div className="">610 ₽</div>
                                <div className="">шт.</div>
                            </div>
                            <div className="">В наличии</div>
                        </div>
                        <div className="">
                            <div className="">
                                <div className="">5.0</div>
                                <div className="">
                                    <img src="svg/Star.svg" alt="star" />
                                    <img src="svg/Star.svg" alt="star" />
                                    <img src="svg/Star.svg" alt="star" />
                                    <img src="svg/Star.svg" alt="star" />
                                    <img src="svg/Star.svg" alt="star" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <button className="" >В корзину</button>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="">
                                <button id="like_1" className="" aria-label="Отправить реакцию «нравится»" aria-pressed="false" data-id="1">
                                    <svg className="" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="svg/like_no_1.svg">
                                        <path className="" d="M15.8398 2.39496C13.013 -0.169205 10.2871 2.03882 9.27755 3.46336C8.26797 2.03882 5.54163 -0.169205 2.71481 2.39496C-0.112011 4.95912 1.87349 8.80536 3.2196 10.408C4.22918 11.6544 6.85456 14.361 9.27755 15.2158C11.7005 14.361 14.3254 11.6544 15.335 10.408C16.6811 8.80536 18.6666 4.95912 15.8398 2.39496Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPersonalArea;
