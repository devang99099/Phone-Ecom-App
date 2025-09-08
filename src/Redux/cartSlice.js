import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementQty: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQty: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQty,
  decrementQty,
} = cartSlice.actions;

export default cartSlice.reducer;
