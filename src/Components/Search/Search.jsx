import debounce from 'lodash.debounce';
import React from 'react'
import { SearchValue } from '../../App';

import s from './search.module.scss';

function Search() {
  const { setSearchValue } = React.useContext(SearchValue);
  const [ value, setValue ] = React.useState('');

  const inputRef = React.useRef();
  const onClickClear = () => {
    setValue('');
    setSearchValue('');
    inputRef.current.focus();
  };

  const debounceSearch = React.useCallback(
    debounce((event) => {
          setSearchValue(event);
        }, 250), 
      [],
  )

  const onChangeInput = (event) => {
    setValue(event.target.value);
    debounceSearch(event.target.value);
  }
  return (
    <div className={s.root}>
      <input className={s.search} ref={inputRef} onChange={onChangeInput} value={value} type="text" placeholder="Пошук піцци..." />
      {value && (
        <svg className={s.search__close} onClick={onClickClear} fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
        </svg>
      )}
    </div>
  );
}

export default Search;