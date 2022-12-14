import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setPageCount, setParams } from '../redux/slice/sliceFilter';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';


import Sort, { selects } from '../Components/Sort';
import Categories from '../Components/Categories';
import PizzaBlock from '../Components/PizzaBlock';
import SkeletonPizza from '../Components/PizzaBlock/SkeletonPizza';
import Pagination from '../Components/Pagination/Pagination';
import { SearchValue } from '../App';
import axios from 'axios';

function Home() {
  const { categoryId, sort, pageCount } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchValue } = React.useContext(SearchValue);

  let [items, setItems] = React.useState([]);
  let [loaded, setLoaded] = React.useState(true);

  // React.useEffect(() => {
  //   const params = qs.parse(window.location.search.substring(1));

  //   const sort = selects.find((obj) => obj.sortProperty === params.sortProperty);

  //   dispatch(setParams());
  // }, []);

  const onChangePage = (number) => {
    dispatch(setPageCount(number));
  };

  const sortBy = sort.sortProperty.replace('-', '');
  const order = sort.sortProperty.includes('-') ? 'desc' : 'asc';
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';

  React.useEffect(() => {
    axios.get(`https://63472e200484786c6e7c8b0f.mockapi.io/pizzas?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`).then((items) => {
      setItems(items.data);
      setLoaded(false);
    });
    window.scrollTo(0, 0);
  }, 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [categoryId, sort, searchValue, pageCount]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      categoryId,
      sort: sort.sortProperty,
      searchValue,
      pageCount,
    });
    navigate(`?${queryString}`);
  }, 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [categoryId, sort, searchValue, pageCount]);

  const skeleton = [...new Array(6)].map((_, index) => <SkeletonPizza key={index} />);
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

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
      <Pagination pageCount={pageCount} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;
