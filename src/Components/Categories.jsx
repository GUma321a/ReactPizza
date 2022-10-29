// import {useState} from 'react';
import React from "react";

function Categories({ onClickCategories, activeCategories }) {
  const categories = ['Все', "М'ясна", 'Вегетаріанська', 'Гриль', 'Гострі', 'Закриті'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => {
          return (
            <li key={i} onClick={() => onClickCategories(i)} className={activeCategories === i ? 'active' : '""'}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;