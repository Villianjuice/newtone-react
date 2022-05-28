import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cartSlice'
import itemsReducer from "./items/itemsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsReducer
  }
})