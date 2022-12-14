import { configureStore } from '@reduxjs/toolkit';
import filter from './slice/sliceFilter';
import cartSlice from './slice/cartSlice';

export const store = configureStore({
  reducer: { filter: filter, cartSlice },
});
