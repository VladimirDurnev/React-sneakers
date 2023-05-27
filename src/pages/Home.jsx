import React, { useContext } from 'react';
import AppContext from '../context';
import cl from '../style/App.module.css';
import Search from '../UI/Search';
import { renderItems } from '../helpers';

export default function Home() {
    const {
        sneakers,
        itemCart,
        itemFavorite,
        searchValue,
        setSearchValue,
        setItemFavorite,
        setItemCart,
        loading,
    } = useContext(AppContext);

    return (
        <>
            <div className={cl.sneakers}>
                <h1>Избранное</h1>
                <Search
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </div>
            <div className={cl.Allcard__wrapper}>
                {renderItems(
                    sneakers,
                    itemCart,
                    itemFavorite,
                    searchValue,
                    setItemFavorite,
                    setItemCart,
                    loading
                )}
            </div>
        </>
    );
}
