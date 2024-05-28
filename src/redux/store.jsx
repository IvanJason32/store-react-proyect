import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
 