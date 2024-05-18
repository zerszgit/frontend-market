import React from 'react';


function PersonalArea() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="">
                <img src="img/logo_pc_header.svg" alt="" style={{ width: '176px', cursor: 'pointer' }} onClick={() => window.location.href='home.html'} />
                <img src="img/cvtalog_button.svg" alt="" style={{ width: '146px', cursor: 'pointer' }} onClick={() => window.location.href='catalog.html'} />
                <div className="">
                    <input className="" type="text" placeholder="Поиск товара" />
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
            <div style={{ display: 'flex' }}>
                <div>
                    <div className="" style={{ marginRight: '40px' }}>
                        <a className="" style={{ fontSize: '30px', fontWeight: 'bold' }}>Корзина</a>
                        <a style={{ marginLeft: '260px' }}> <img src="svg/Map Point.svg" alt="" />Пункт выдачи: г Москва, ул Октябрьская 25</a>
                        <div className="">
                            <div style={{ display: 'flex' }}>
                                <input type="checkbox" id="selectAll" /> <div style={{ fontSize: '13px', marginLeft: '5px' }}>Выбрать всё</div>
                            </div>
                            <div className="">Удалить выбранные</div>
                        </div>
                    </div>
                    <div className="">
                        {/* Product details here */}
                    </div>
                </div>
                <div style={{ borderLeft: '1px solid #E0E0E0', height: '80vh', paddingLeft: '40px', paddingTop: '90px' }}>
                    {/* Contents of the cart with pricing */}
                    <div className="result" style={{ background: 'white', borderRadius: '20px', padding: '10px 0px', marginTop: '1px' }}>
                        {/* Cart contents */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalArea;
