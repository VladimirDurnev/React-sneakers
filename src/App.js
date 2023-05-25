import cl from './style/App.module.css';
import search from './img/search.png';
import Header from './components/Header';
import Cart from './components/Cart'
import Card from './components/Card'
function App() {
    return (
        <div className={cl.wrapper}>
			<Cart></Cart>
            <Header></Header>
            <hr />
            <section>
                <div className={cl.sneakers}>
                    <h1>Все кроссовки</h1>
                    <div className={cl.search}>
                        <img src={search} alt="search" />
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </div>
                <div className={cl.Allcard__wrapper}>
					<Card></Card>
                </div>
            </section>
        </div>
    );
}

export default App;
