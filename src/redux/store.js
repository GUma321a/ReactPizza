import { configureStore } from '@reduxjs/toolkit';
import slicePizza from './slice/slicePizza';
import filter from './slice/sliceFilter';

export const store = configureStore({
  reducer: { counter: slicePizza, filter },
});
