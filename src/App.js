import './scss/app.scss';

import Header from './Components/Header';
import Sort from './Components/Sort';
import Categories from './Components/Categories';
import PizzaBlock from './Components/PizzaBlock';
import pizzas from './db.json';

function App() {
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
            {pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
