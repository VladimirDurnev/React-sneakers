import React from 'react';
// import logo from '../img/logo.png';
// import shop from '../img/shop.png';
// import love from '../img/love.png';
// import user from '../img/user.png';
import cl from '../style/Header.module.css'
const Header = ({setOpenCart}) => {
    return (
        <header className={cl.header}>
            <div className={cl.headerInfoWrapper}>
                <img src='/img/png/logo.png' alt="" />
                <div className={cl.headerInfo}>
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className={cl.headerRight}>
                <li onClick={() => setOpenCart(true)}>
                    <img src='/img/png/shop.png' alt="" />
                    <span>1205 руб</span>
                </li>
                <li>
                    <img src='/img/png/love.png' alt="" />
                </li>
                <li>
                    <img src='/img/png/user.png' alt="" />
                </li>
            </ul>
        </header>
    );
};

export default Header;
