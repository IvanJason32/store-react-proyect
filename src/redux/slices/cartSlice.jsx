import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const findProductIndex = state.items.findIndex(
        (product) => product.item_id === payload.item_id
      );
      if (findProductIndex === -1) {
        state.items.push({ ...payload, quantity: 1 });
        state.totalItems = state.totalItems + 1;
        state.totalPrice = state.totalPrice + parseInt(payload.price);
        return;
      } else {
        state.items[findProductIndex] = {
          ...state.items[findProductIndex],
          quantity: state.items[findProductIndex].quantity + 1,
        };
        state.totalItems = state.totalItems + 1;
        state.totalPrice = state.totalPrice + parseInt(payload.price);
        return;
      }
    },
    decreseToCart: (state, { payload }) => {
      const findProductIndex = state.items.findIndex(
        (product) => product.item_id === payload
      );

      if (findProductIndex !== -1) {
        if (state.items[findProductIndex].quantity === 1) {
          state.totalPrice =
            state.totalPrice - state.items[findProductIndex].price;
          state.items.splice(findProductIndex, 1);
          state.totalItems = state.totalItems - 1;
        } else {
          state.items[findProductIndex] = {
            ...state.items[findProductIndex],
            quantity: state.items[findProductIndex].quantity - 1,
          };
          state.totalPrice =
            state.totalPrice - state.items[findProductIndex].price;
          state.totalItems = state.totalItems - 1;
        }
      }
    },
    cleanCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, decreseToCart, cleanCart } = cartSlice.actions;

export default cartSlice.reducer;
