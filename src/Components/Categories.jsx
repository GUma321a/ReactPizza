import {useState} from 'react';

function Categories() {
  let [activeCategories, setActiveCategories] = useState(0);

  const onClickCategories = (index) => {
    setActiveCategories(index)
  }

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => {
          return(
          <li key={i} onClick={() => onClickCategories(i)} className={activeCategories === i ? 'active' : '""'}>
            {value}
          </li>)
        })}
      </ul>
    </div>
  );
}

export default Categories;