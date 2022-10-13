import {useState, useEffect} from 'react';

import './scss/app.scss';

import Header from './Components/Header';
import Sort from './Components/Sort';
import Categories from './Components/Categories';
import PizzaBlock from './Components/PizzaBlock';
import SkeletonPizza from './Components/PizzaBlock/SkeletonPizza';

function App() {
  let [items, setItems] = useState([])
  let [loaded, setLoaded] = useState(true)

  useEffect(() => {
    fetch('https://63472e200484786c6e7c8b0f.mockapi.io/pizzas')
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        setItems(items);
        setLoaded(false);
      })
  }, [])

  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Всі піцци</h2>
          <div className="content__items">
            {loaded ? [...new Array(6)].map((_, index) => <SkeletonPizza key={index} />) : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
