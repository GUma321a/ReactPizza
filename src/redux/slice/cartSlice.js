import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // state.items.push(action.payload);
      // state.totalPrice = state.items.reduce((sum, obj) => {
      //   return obj.price + sum;
      // }, 0);

      const findItems = state.items.find((obj) => obj.id === action.payload.id);

      if(findItems){
        findItems.count++;
      } else{
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id === action.payload)
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem , removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;
