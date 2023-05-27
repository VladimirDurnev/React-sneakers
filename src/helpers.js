import Card from "./components/Card";
export const renderItems = (
    arr,
    itemCart,
    itemFavorite,
    searchValue,
    setItemFavorite,
    setItemCart,
    loading
) => {
    return (
        loading
            ? [...Array(4)]
            : arr.filter((item) =>
                  item.title.toLowerCase().includes(searchValue.toLowerCase())
              )
    ).map((item) => (
        <Card
            key={item?.id}
            id={item?.id}
            title={item?.title}
            price={item?.price}
            urlImg={item?.urlImg}
            itemFavorite={itemFavorite}
            setItemFavorite={setItemFavorite}
            itemCart={itemCart}
            setItemCart={setItemCart}
            loading={loading}
        />
    ));
};
