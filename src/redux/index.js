import { configureStore } from '@reduxjs/toolkit';
import cart from './cart/cartSlice';
import items from './items/itemsSlice';
import filter from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    cart,
    items,
    filter,
  },
});
