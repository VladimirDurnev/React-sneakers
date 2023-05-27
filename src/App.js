import { useEffect, useState } from 'react';
import axios from 'axios';

import cl from './style/App.module.css';
import Header from './components/Header';
import Cart from './components/Cart';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';

import AppContext from './context';

function App() {
    const [sneakers, setSneakers] = useState([]);
    const [itemCart, setItemCart] = useState([]);
    const [itemFavorite, setItemFavorite] = useState([]);
    const [openCart, setOpenCart] = useState(false);
    const [loading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const fetching = async () => {
            const itemRes = await axios.get('http://localhost:3000/item');
            const cartRes = await axios.get('http://localhost:3000/cart');
            const favoriteRes = await axios.get(
                'http://localhost:3000/favorite'
            );

            setSneakers(itemRes.data);
            setItemCart(cartRes.data);
            setItemFavorite(favoriteRes.data);
            setLoading(false);
        };
        fetching();
    }, []);

    return (
        <AppContext.Provider
            value={{
                sneakers,
                itemCart,
                itemFavorite,
                searchValue,
                setSearchValue,
                setItemFavorite,
                setItemCart,
                loading,
            }}
        >
            <div className={cl.wrapper}>
                {openCart && (
                    <Cart
                        setOpenCart={setOpenCart}
                        itemCart={itemCart}
                        setItemCart={setItemCart}
                    />
                )}
                <Header setOpenCart={setOpenCart} />
                <Routes>
                    <Route path="/" element=<Home /> />
                    <Route path="/Favorite" element=<Favorite /> />
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
