import React from 'react';
import cl from '../style/Header.module.css';

import { Link } from 'react-router-dom';
const Header = ({ setOpenCart }) => {
    return (
        <>
            <header className={cl.header}>
                <div className={cl.headerInfoWrapper}>
                    <Link to="/">
                        <img src="/img/png/logo.png" alt="" />
                    </Link>
                    <div className={cl.headerInfo}>
                        <h3>REACT SNEAKERS</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className={cl.headerRight}>
                    <li onClick={() => setOpenCart(true)}>
                        <img src="/img/png/shop.png" alt="" />
                        <span>1205 руб</span>
                    </li>
                    <Link to="/Favorite">
                        <li>
                            <img src="/img/png/love.png" alt="" />
                        </li>
                    </Link>

                    <li>
                        <img src="/img/png/user.png" alt="" />
                    </li>
                </ul>
            </header>
            <hr />
        </>
    );
};

export default Header;
