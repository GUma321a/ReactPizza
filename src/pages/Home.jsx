import React from 'react';

import Sort from '../Components/Sort';
import Categories from '../Components/Categories';
import PizzaBlock from '../Components/PizzaBlock';
import SkeletonPizza from '../Components/PizzaBlock/SkeletonPizza';
import Pagination from '../Components/Pagination/Pagination';
import { SearchValue } from '../App';

function Home() {
  const { searchValue} = React.useContext(SearchValue);

  let [items, setItems] = React.useState([]);
  let [loaded, setLoaded] = React.useState(true);
  let [activeCategories, setActiveCategories] = React.useState(0);
  let [currentPage, setCurrentPage] = React.useState(1);
  let [selectName, setSelectName] = React.useState({
    name: 'популярності',
    sortProperty: 'rating',
  });

  let sortBy = selectName.sortProperty.replace('-', '');
  let order = selectName.sortProperty.includes('-') ? 'desc' : 'asc';
  let category = activeCategories > 0 ? `category=${activeCategories}` : '';
  let search = searchValue ? `&search=${searchValue}` : '';

  React.useEffect(() => {
    fetch(`https://63472e200484786c6e7c8b0f.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        setItems(items);
        setLoaded(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategories, selectName, searchValue, currentPage]);


  const skeleton = [...new Array(6)].map((_, index) => <SkeletonPizza key={index} />);
  const pizzas =  items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategories={(i) => {
            setActiveCategories(i);
          }}
          activeCategories={activeCategories}
        />
        <Sort
          onClickSort={(i) => {
            setSelectName(i);
          }}
          activeSort={selectName}
        />
      </div>
      <h2 className="content__title">Всі піцци</h2>
      <div className="content__items">{loaded ? skeleton : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number + 1)} />
    </div>
  );
}

export default Home;
