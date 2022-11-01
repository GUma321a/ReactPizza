import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slice/sliceFilter';


import Sort from '../Components/Sort';
import Categories from '../Components/Categories';
import PizzaBlock from '../Components/PizzaBlock';
import SkeletonPizza from '../Components/PizzaBlock/SkeletonPizza';
import Pagination from '../Components/Pagination/Pagination';
import { SearchValue } from '../App';

function Home() {
  const {categoryId, sort} = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const { searchValue} = React.useContext(SearchValue);

  let [items, setItems] = React.useState([]);
  let [loaded, setLoaded] = React.useState(true);
  let [currentPage, setCurrentPage] = React.useState(1);

  let sortBy = sort.sortProperty.replace('-', '');
  let order = sort.sortProperty.includes('-') ? 'desc' : 'asc';
  let category = categoryId > 0 ? `category=${categoryId}` : '';
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
  }, [categoryId, sort, searchValue, currentPage]);


  const skeleton = [...new Array(6)].map((_, index) => <SkeletonPizza key={index} />);
  const pizzas =  items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategories={(id) => {
            dispatch(setCategoryId(id));
          }}
          activeCategories={categoryId}
        />
        <Sort />
      </div>
      <h2 className="content__title">Всі піцци</h2>
      <div className="content__items">{loaded ? skeleton : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number + 1)} />
    </div>
  );
}

export default Home;
