import React from 'react';
import cl from '../style/Cart.module.css'
import SNEAKERS from '../img/SNEAKERS.jpg';
import close from '../img/close.png';
const Cart = () => {
    return (
        <div>
            <div style={{display: 'none'}} className={cl.overlay}>
                <div className={cl.cart}>
                    <h3 className={cl.cartTitle}>Корзина</h3>
                    <div className={cl.cartItem}>
                        <div className={cl.cartContent}>
                            <img
                                className={cl.cartContentImg}
                                src={SNEAKERS}
                                alt=""
                            />
                            <div className={cl.cartContentPrice}>
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 руб.</b>
                            </div>
                            <button className={cl.close}>
                                <img src={close} alt="close" />
                            </button>
                        </div>
						
                    </div>

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
					<button className={cl.cartButton}>
						Оформить заказ
					</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
