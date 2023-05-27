import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContentLoader from 'react-content-loader';
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
    loading,
}) => {
    const [addFavorite, setAddFavorite] = useState(false);
    const [favoriteStatus, setFavoriteStatus] = useState(false);
    const [addSneakers, setAddSneakers] = useState(false);
    const [cartStatus, setCartStatus] = useState(false);
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
            setFavoriteStatus(true);
        } else {
            setFavoriteStatus(false);
        }
    });
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
        } else {
            axios.delete(`http://localhost:3000/cart/${id}`);
            setItemCart((prev) => prev.filter((item) => item.id !== id));
        }
    };
    const addToFavorite = () => {
        setAddFavorite(!addFavorite);
        if (favoriteStatus === false) {
            setItemFavorite((prev) => [...prev, { id, title, price, urlImg }]);
            axios
                .post('http://localhost:3000/favorite', {
                    id,
                    title,
                    price,
                    urlImg,
                })
                .then(setFavoriteStatus(true));
        } else {
            axios.delete(`http://localhost:3000/favorite/${id}`);
            setItemFavorite((prev) => prev.filter((item) => item.id !== id));
        }
    };
    return (
        <>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={160}
                    height={260}
                    viewBox="0 0 160 260"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="20" ry="20" width="150" height="90" />
                    <rect x="134" y="139" rx="0" ry="0" width="25" height="2" />
                    <rect x="0" y="100" rx="5" ry="5" width="150" height="15" />
                    <rect x="0" y="129" rx="5" ry="5" width="90" height="15" />
                    <rect
                        x="0"
                        y="190"
                        rx="10"
                        ry="10"
                        width="80"
                        height="25"
                    />
                    <rect
                        x="120"
                        y="190"
                        rx="10"
                        ry="10"
                        width="32"
                        height="32"
                    />
                </ContentLoader>
            ) : (
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
            )}
        </>
    );
};

export default Card;
