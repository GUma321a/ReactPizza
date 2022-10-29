import { Routes, Route, } from 'react-router-dom';
import React from 'react';

import './scss/app.scss';

import Header from './Components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';


export const SearchValue = React.createContext();


function App() {
  let [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchValue.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchValue.Provider>
    </div>
  );
}

export default App;
