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
  },
});

export const { setCategoryId } = filter.actions;

export default filter.reducer;