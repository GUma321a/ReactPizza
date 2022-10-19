import { useState, useEffect } from 'react';

import Sort from '../Components/Sort';
import Categories from '../Components/Categories';
import PizzaBlock from '../Components/PizzaBlock';
import SkeletonPizza from '../Components/PizzaBlock/SkeletonPizza';

function Home() {
  let [items, setItems] = useState([]);
  let [loaded, setLoaded] = useState(true);

  let [activeCategories, setActiveCategories] = useState(0);
  let [selectName, setSelectName] = useState({
    name: 'популярності', 
    sortProperty:'rating',
  });

  let sortBy = selectName.sortProperty.replace('-', '')
  let order = selectName.sortProperty.includes('-') ? 'desc' : 'asc';
  let category = activeCategories>0 ? `category=${activeCategories}` : '';

  useEffect(() => {
    fetch(`https://63472e200484786c6e7c8b0f.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`)
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        setItems(items);
        setLoaded(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategories, selectName]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickCategories={(i) => {setActiveCategories(i)}} activeCategories={activeCategories} />
        <Sort onClickSort={(i) => {setSelectName(i)}} activeSort={selectName}/>
      </div>
      <h2 className="content__title">Всі піцци</h2>
      <div className="content__items">{loaded ? [...new Array(6)].map((_, index) => <SkeletonPizza key={index} />) : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}</div>
    </div>
  );
}

export default Home;
