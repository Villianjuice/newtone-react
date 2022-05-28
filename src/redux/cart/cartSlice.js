import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [],
    totalPrice: 0,
    totalCount: 0,
  },
  reducers: {
    setItemInCart(state, action) {
      state.itemsInCart.push(action.payload);
      state.totalCount = state.itemsInCart.length;
      state.totalPrice = state.itemsInCart.reduce((sum, itemInCart) => sum += itemInCart.price, 0)
    },
    deleteItemFromCart(state, action) {
      state.itemsInCart = state.itemsInCart.filter((item) => item.id !== action.payload);
      state.totalPrice = state.itemsInCart.reduce((sum, itemInCart) => sum += itemInCart.price, 0)
    },
  },
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
