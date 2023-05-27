import { useEffect, useState } from 'react';
import axios from 'axios';

import cl from './style/App.module.css';
import Header from './components/Header';
import Cart from './components/Cart';


import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';

function App() {
    const [sneakers, setSneakers] = useState();
    const [itemCart, setItemCart] = useState([]);
    const [itemFavorite, setItemFavorite] = useState([]);
    const [openCart, setOpenCart] = useState(false);
    const [response, setResponse] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:3000/item')
            .then((res) => setSneakers(res.data))
            .then(() => setResponse(true));
        axios
            .get('http://localhost:3000/cart')
            .then((res) => setItemCart(res.data));
        axios
            .get('http://localhost:3000/favorite')
            .then((res) => setItemFavorite(res.data));
    }, []);

    return (
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
                <Route
                    path="/"
                    element=<Home
                        sneakers={sneakers}
                        itemCart={itemCart}
                        itemFavorite={itemFavorite}
                        response={response}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        setItemFavorite={setItemFavorite}
                        setItemCart={setItemCart}
                    />
                />
                <Route
                    path="/Favorite"
                    element=<Favorite
                        itemCart={itemCart}
                        itemFavorite={itemFavorite}
                        response={response}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        setItemFavorite={setItemFavorite}
                        setItemCart={setItemCart}
                    
                    />
                />
            </Routes>
        </div>
    );
}

export default App;
