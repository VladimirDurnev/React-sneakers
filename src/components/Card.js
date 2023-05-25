import React from 'react';
import SNEAKERS from '../img/SNEAKERS.jpg';
import plus from '../img/plus.png';
import favorite from '../img/favorite.png';
import favoriteRed from '../img/favoriteRed.png';
import cl from '../style/Card.module.css'

const Card = () => {
    return (
        <div>
            <div className={cl.card}>
                <span className={cl.favorite}>
                    <img src={favorite} alt="" />
                </span>
                <img className={cl.sneakers__img} src={SNEAKERS} alt="" />
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className={cl.price__wrapper}>
                    <div className={cl.price}>
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                    </div>
                    <button>
                        <img src={plus} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
