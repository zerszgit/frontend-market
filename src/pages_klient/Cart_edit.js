import React from 'react';


const CartEdit = () => {
    return (
        <div>
            <div className="">
                <img src="img/logo_pc_header.svg" alt="" style={{ width: '176px', cursor: 'pointer' }} onClick={() => window.location.href = 'home.html'} />
                <img src="img/cvtalog_button.svg" alt="" style={{ width: '146px', cursor: 'pointer' }} onClick={() => window.location.href = 'catalog.html'} />
                <div className="">
                    <input className="" type="text" placeholder="Поиск товара" />
                    <img src="img/serch_header.svg" alt="" style={{ cursor: 'pointer' }} />
                </div>
                <div className="" onClick={() => window.location.href = 'personal_area.html'}>
                    <div className="">
                        <img src="svg/User.svg" alt="" />
                        <a style={{ fontSize: '10px', color: '#757575' }} onClick={() => window.location.href = 'personal_area.html'}>Кабинет</a>
                    </div>
                    <div className="" onClick={() => window.location.href = 'favorites.html'}>
                        <img src="svg/Heart.svg" alt="" />
                        <a style={{ fontSize: '10px', color: '#757575' }} onClick={() => window.location.href = 'favorites.html'}>Избранное</a>
                    </div>
                    <div className="" onClick={() => window.location.href = 'cart.html'}>
                        <img src="svg/Cart.svg" alt="" />
                        <a style={{ fontSize: '10px', color: '#757575' }} onClick={() => window.location.href = 'cart.html'}>Корзина</a>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div className="">
                    <div className="a1" onClick={() => window.location.href = 'personal_area.html'}>Личный кабинет</div>
                    <div className="a2" onClick={() => window.location.href = 'personal_area.html'}>Мои данные</div>
                    <div className="a2_activ" onClick={() => window.location.href = 'cart_edit.html'}>Способы оплаты</div>
                    <div className="a2" onClick={() => window.location.href = 'purchases.html'}>Покупки</div>
                    <div className="a2" onClick={() => window.location.href = 'delivery.html'}>Доставки</div>
                    <div className="">
                        <img src="svg/Logout 2.svg" alt="" />
                        <a>Выйти</a>
                    </div>
                </div>
                <div>
                    <div className="">
                        <div className="" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <a style={{ fontSize: '20px', marginLeft: '40px' }}>Способы оплаты</a>
                        </div>
                        <div className="" style={{ fontSize: '20px', marginLeft: '40px' }}>
                            <div className="">
                                <p>Мир *9033</p>
                            </div>
                            <img src="svg/Line 18.svg" alt="" />
                            <div className="">
                                <img src="svg/Trash.svg" alt="del" />
                            </div>
                        </div>
                        <div className="">
                            <a style={{ fontSize: '20px', marginLeft: '20px', fontWeight: '600' }}>Добавить карту</a>
                        </div>
                        <div className="">
                            <div className="">
                                <div className=''>
                                    <img src="img/carts.png" alt="#" />
                                </div>
                                <div className="" style={{ marginTop: '15px', marginBottom: '15px' }}>
                                    <a style={{ color: '#757575', fontSize: '13px' }}>Номер карты</a>
                                    <input type="num_cart" name="num_cart" />
                                </div>
                                <div className="">
                                    <div className="">
                                        <a style={{ color: '#757575', fontSize: '13px' }}>Действует до</a>
                                        <div className="">
                                            <input type="month_action" name="month" placeholder="мм" />
                                            <a style={{ margin: '5px', color: '#757575' }}>/</a>
                                            <input type="year" name="year" placeholder="гг" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <a style={{ color: '#757575', fontSize: '13px' }}>CVV CVC</a>
                                        <input type="CVV" name="CVV" />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <button onClick="">Добавить карту</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartEdit;
