import axios from 'axios';

import cl from './style/App.module.css';
import Header from './components/Header';
import Search from './UI/Search';
import Cart from './components/Cart';
import Card from './components/Card';

import { useEffect, useState } from 'react';
function App() {
    const [sneakers, setSneakers] = useState();
    const [itemCart, setItemCart] = useState([]);
    const [openCart, setOpenCart] = useState(false);
    const [response, setResponse] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios
            .get('https://646f7a0b09ff19b1208754c5.mockapi.io/items')
            .then((res) => setSneakers(res.data))
            .then(() => setResponse(true));
    }, []);

    return (
        <div className={cl.wrapper}>
            {openCart && <Cart setOpenCart={setOpenCart} itemCart={itemCart} />}
            <Header setOpenCart={setOpenCart} />
            <hr />
            <section>
                <div className={cl.sneakers}>
                    <h1>Все кроссовки</h1>
                    <Search
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                </div>
                <div className={cl.Allcard__wrapper}>
                    {response &&
                        sneakers
                            .filter((item) =>
                                item.title
                                    .toLowerCase()
                                    .includes(searchValue.toLowerCase())
                            )
                            .map((item) => (
                                <Card
                                    key={item.id}
                                    title={item.title}
                                    price={item.price}
                                    urlImg={item.urlImg}
                                    itemCart={itemCart}
                                    setItemCart={setItemCart}
                                />
                            ))}
                </div>
            </section>
        </div>
    );
}

export default App;
