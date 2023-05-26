import React, { useState } from 'react';
import plus from '../img/plus.png';
import add from '../img/Add.png';
import favorite from '../img/favorite.png';
import favoriteRed from '../img/favoriteRed.png';
import cl from '../style/Card.module.css';

const Card = ({ title, price, urlImg, itemCart, setItemCart }) => {
    const [addFavorite, setAddFavorite] = useState(false);
    const [addSneakers, setAddSneakers] = useState(false);

    const addR = () => {
        setAddSneakers(!addSneakers);
        if (
            !itemCart.some(
                (item) =>
                    item.title === title &&
                    item.price === price &&
                    item.urlImg === urlImg
            )
        ) {
            setItemCart((prev) => [...prev, { title, price, urlImg }]);
        }
    };

    return (
        <div>
            <div className={cl.card}>
                <span className={cl.favorite}>
                    <img
                        src={addFavorite ? favoriteRed : favorite}
                        alt=""
                        onClick={() => setAddFavorite(!addFavorite)}
                    />
                </span>
                <img className={cl.sneakers__img} src={urlImg} alt="" />
                <p>{title}</p>
                <div className={cl.price__wrapper}>
                    <div className={cl.price}>
                        <span>Цена:</span>
                        <b>{price}</b>
                    </div>

                    <img
                        src={addSneakers ? add : plus}
                        alt=""
                        onClick={() => addR()}
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
