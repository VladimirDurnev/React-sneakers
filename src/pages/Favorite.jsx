import React from 'react';
import cl from '../style/App.module.css';
import Search from '../UI/Search';
import Card from '../components/Card';

export default function Favorite({
    itemCart,
    itemFavorite,
    response,
    searchValue,
    setSearchValue,
    setItemFavorite,
    setItemCart,
}) {
    return (
        <>
            <div className={cl.sneakers}>
                <h1>Все кроссовки</h1>
                <Search
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </div>
            <div className={cl.Allcard__wrapper}>
                {response &&
                    itemFavorite
                        .filter((item) =>
                            item.title
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        )
                        .map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                urlImg={item.urlImg}
                                itemFavorite={itemFavorite}
                                setItemFavorite={setItemFavorite}
                                itemCart={itemCart}
                                setItemCart={setItemCart}
                            />
                        ))}
            </div>
        </>
    );
}
