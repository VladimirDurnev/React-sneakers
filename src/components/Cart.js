import React from 'react';
import cl from '../style/Cart.module.css';
import axios from 'axios';

const Cart = ({ setOpenCart, itemCart, setItemCart }) => {
    const removeItem = (id) => {
        console.log(id)
        axios.delete(`http://localhost:3000/cart/${id}`)
        setItemCart(prev => prev.filter(item => item.id !== id) )
    }
    return (
        <div>
            <div className={cl.overlay} onClick={() => setOpenCart()}>
                <div className={cl.cart} onClick={(e) => e.stopPropagation()}>
                    <h3 className={cl.cartTitle}>Корзина</h3>
                    {itemCart.map((item) => (
                        <div className={cl.cartItem}>
                            <div className={cl.cartContent}>
                                <img
                                    className={cl.cartContentImg}
                                    src={item.urlImg}
                                    alt=""
                                />
                                <div className={cl.cartContentPrice}>
                                    <p>{item.title}</p>
                                    <b>{item.price}</b>
                                </div>
                                <button className={cl.close} onClick={() => removeItem(item.id)}>
                                    <img
                                        src={'/img/png/close.png'}
                                        alt="close"
                                    />
                                </button>
                            </div>
                        </div>
                    ))}

                    <ul className={cl.cartFullPriceWrapper}>
                        <li className={cl.cartFullPrice}>
                            <p>Итого: </p>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li className={cl.cartFullPrice}>
                            <p>Налог 5%: </p>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                    </ul>
                    <button className={cl.cartButton}>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
