import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cl from '../style/Card.module.css';

const Card = ({
    id,
    title,
    price,
    urlImg,
    itemCart,
    setItemCart,
    itemFavorite,
    setItemFavorite,
}) => {
    const [addFavorite, setAddFavorite] = useState(false);
    const [favoriteStatus, setFavoriteStatus] = useState(false);
    const [addSneakers, setAddSneakers] = useState(false);
    
    useEffect(() => {
        if (
            itemFavorite.some(
                (item) =>
                    item.id === id &&
                    item.title === title &&
                    item.price === price &&
                    item.urlImg === urlImg
            )
        ) {
            setFavoriteStatus(true)
        } else{
            setFavoriteStatus(false)
        }
        
    })
    const addToCart = () => {
        setAddSneakers(!addSneakers);
        if (
            !itemCart.some(
                (item) =>
                    item.title === title &&
                    item.price === price &&
                    item.urlImg === urlImg
            )
        ) {
            setItemCart((prev) => [...prev, { id, title, price, urlImg }]);
            axios.post('http://localhost:3000/cart', {
                id,
                title,
                price,
                urlImg,
            });
        }
    };
    const addToFavorite = () => {
        setAddFavorite(!addFavorite);
        if (favoriteStatus === false) {
            setItemFavorite((prev) => [...prev, { id, title, price, urlImg }]);
            axios.post('http://localhost:3000/favorite', {
                id,
                title,
                price,
                urlImg,
            }).then(setFavoriteStatus(true))
        }else{
            axios.delete(`http://localhost:3000/favorite/${id}`);
            setItemFavorite(prev => prev.filter(item => item.id !== id))
        }
    };
    return (
        <div>
            <div className={cl.card}>   
                <span className={cl.favorite}>
                    <img
                        src={
                            favoriteStatus
                                ? '/img/png/favoriteRed.png'
                                : '/img/png/favorite.png'
                        }
                        alt=""
                        onClick={() => addToFavorite()}
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
                        src={
                            addSneakers
                                ? '/img/png/Add.png'
                                : '/img/png/plus.png'
                        }
                        alt=""
                        onClick={() => addToCart()}
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
