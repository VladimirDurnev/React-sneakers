import React from 'react';
import cl from '../style/Search.module.css';
export default function Search({ searchValue, setSearchValue }) {
    return (
        <div className={cl.search}>
            <img src="/img/png/search.png" alt="search" />
            <input
                value={searchValue}
                type="text"
                placeholder="Поиск..."
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    );
}
