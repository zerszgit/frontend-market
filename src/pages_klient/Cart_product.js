import React from 'react';


function PersonalArea() {
    const decrement = () => {
        // decrement function logic here
    };

    const increment = () => {
        // increment function logic here
    };

    const changeColorAndText = (element) => {
        // change color and text logic here
    };

    const toggleStar = (starIndex) => {
        // toggle star logic here
    };

    const changeReviews = () => {
        // change reviews logic here
    };

    return (
        <div lang="en">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="">
                    <img src="img/logo_pc_header.svg" alt="" style={{ width: '176px', cursor: 'pointer' }} onClick={() => window.location.href='home.html'} />
                    <img src="img/cvtalog_button.svg" alt="" style={{ width: '146px', cursor: 'pointer' }} onClick={() => window.location.href='catalog.html'} />
                    <div className="">
                        <input className="sgerch_pc" type="text" placeholder="Поиск товара" />
                        <img src="img/serch_header.svg" alt="" style={{ cursor: 'pointer' }} />
                    </div>
                    <div className="" onClick={() => window.location.href='personal_area.html'}>
                        <div className="">
                            <img src="svg/User.svg" alt="" />
                            <a style={{ fontSize: '10px', color: '#757575' }} onClick={() => window.location.href='personal_area.html'}>Кабинет</a>
                        </div>
                        <div className="" onClick={() => window.location.href='favorites.html'}>
                            <img src="svg/Heart.svg" alt="" />
                            <a style={{ fontSize: '10px', color: '#757575' }} onClick={() => window.location.href='favorites.html'}>Избранное</a>
                        </div>
                        <div className="" onClick={() => window.location.href='cart.html'}>
                            <img src="svg/Cart.svg" alt="" />
                            <a style={{ fontSize: '10px', color: '#757575' }} onClick={() => window.location.href='cart.html'}>Корзина</a>
                        </div>
                    </div>
                </div>
                <div className="" style={{ display: 'flex' }}>
                    <div className="">
                        <div className="">
                            <button className=""><img src="svg/Round Alt Arrow Up.svg" alt="" /></button>
                            <div className=""><img src="/photo_product/00001.png" alt="Thumbnail 1" /></div>
                            <div className=""><img src="svg/Arrow.svg" alt="Thumbnail 2" /></div>
                            <div className=""><img src="/photo_product/00001.png" alt="Thumbnail 3" /></div>
                            <button className=""><img src="svg/Round Alt Arrow Down.svg" alt="" /></button>
                        </div>
                        <div className="">
                            <div className=""><img src="/photo_product/00001.png" alt="Slide 1" /></div>
                            <div className=""><img src="svg/Arrow.svg" alt="Slide 2" /></div>
                            <div className=""><img src="/photo_product/00001.png" alt="Slide 3" /></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="">Лист гипсоволокнистый KNAUF <br /> Суперпол, 600*1200*20мм</div>
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
                                <div className="">Бренд: Кнауф</div>
                            </div>
                            <div className="">
                                <div className="">
                                    <div className="">610 ₽</div>
                                    <div className=""><u>шт</u></div>
                                    <div className="">
                                        <img src="svg/min.svg" alt="" className="" onClick={decrement} />
                                        <span id="counterValue">1</span>
                                        <img src="svg/max.svg" alt="" className="" onClick={increment} />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <button id="like_19" className="" aria-label="Отправить реакцию «нравится»" aria-pressed="false" data-id="1" style={{ width: '50px', height: '50px' }}>
                                        <svg className="" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="svg/like_no_1.svg">
                                            <path className="" d="M15.8398 2.39496C13.013 -0.169205 10.2871 2.03882 9.27755 3.46336C8.26797 2.03882 5.54163 -0.169205 2.71481 2.39496C-0.112011 4.95912 1.87349 8.80536 3.2196 10.408C4.22918 11.6544 6.85456 14.361 9.27755 15.2158C11.7005 14.361 14.3254 11.6544 15.335 10.408C16.6811 8.80536 18.6666 4.95912 15.8398 2.39496Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="">
                                    <button className="" onClick={() => changeColorAndText(this)}>В корзину</button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <hr />
                            <div className="">
                                <div className="">
                                    <img src="svg/Box.svg" alt="" />
                                    <div>Доставка</div>
                                </div>
                                <div className="">18.03 - 20.03, бесплатно</div>
                            </div>
                            <div className="">
                                <div className="">Экспресс-доставка</div>
                                <div className="">завтра, бесплатно от 5000₽, предоплата 100%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ marginTop: '100px' }} />
                <div style={{ display: 'flex', paddingTop: '50px', borderTop: '1px solid #757575' }}>
                    <div className="" style={{ width: '500px' }}>
                        <a>Описание</a>
                        <div className="">КНАУФ-суперпол — элемент пола (ЭП), представляет
                            собой изделие заводской готовности к поэлементной
                            сборке в конструкциях стяжек сборных оснований пола
                            КНАУФ. Элементы пола изготавливаются путем
                            склеивания двух влагостойких гипсоволокнистых
                            листов (ГВЛВ по ГОСТ Р 51829-2001) с размерами
                            1200х600х20 мм с взаимным смещением в двух
                            перпендикулярных направлениях и образованием
                            фальцев шириной 50 мм по периметру изделий.
                            Общая толщина ЭП — 20 мм. Применяется для
                            устройства сборного основания пола, в зданиях
                            различного назначения.</div>
                    </div>
                    <div className="">
                        <a>Характеристики</a>
                        <div className="">
                            {/* Characteristics content */}
                        </div>
                        <a>Размер упаковки</a>
                        <div className="">
                            {/* Package size content */}
                        </div>
                    </div>
                </div>
                <div className="" style={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #757575' }}>
                    <div className="" style={{ marginRight: '70px' }}>
                        <div className="">
                            {/* Reviews content */}
                        </div>
                        <div className="">
                            {/* Reviews header content */}
                        </div>
                    </div>
                    <div className="" style={{ marginLeft: '70px' }}>
                        <div className="">
                            <button className="">Оставить отзыв</button>
                        </div>
                        <div className="">
                            {/* Reviews users content */}
                        </div>
                    </div>
                </div>
                <div className="" style={{ height: '200px' }}></div>
                <div className="" id="modal">
                    <div className="">
                        {/* Modal content */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalArea;
