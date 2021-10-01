import Card from '../components/Card';

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchValue,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content p-40 ">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchValue}
            type="text"
            placeholder="Поиск..."
            value={searchValue}
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item, index) => (
            <Card
              key={index}
              onClickFavorite={(obj) => onAddToFavorite(obj)}
              onClickPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
