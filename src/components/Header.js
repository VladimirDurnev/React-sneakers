import React from 'react';
import logo from '../img/logo.png';
import shop from '../img/shop.png';
import love from '../img/love.png';
import user from '../img/user.png';
import cl from '../style/Header.module.css'
const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.headerInfoWrapper}>
                <img src={logo} alt="" />
                <div className={cl.headerInfo}>
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className={cl.headerRight}>
                <li>
                    <img src={shop} alt="" />
                    <span>1205 руб</span>
                </li>
                <li>
                    <img src={love} alt="" />
                </li>
                <li>
                    <img src={user} alt="" />
                </li>
            </ul>
        </header>
    );
};

export default Header;
