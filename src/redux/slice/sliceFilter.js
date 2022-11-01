import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярності',
    sortProperty: 'rating',
  },
};

export const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setFilter: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setFilter } = filter.actions;

export default filter.reducer;