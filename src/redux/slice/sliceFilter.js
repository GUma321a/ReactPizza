import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: 'популярності',
    sortProperty: 'rating',
  },
};

export const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setFilter(state, action) {
      state.sort = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
    setParams(state, action) {
      state.sort.sortProperty = action.payload.sort;
    },
  },
});

export const { setCategoryId, setFilter, setPageCount, setParams } = filter.actions;

export default filter.reducer;