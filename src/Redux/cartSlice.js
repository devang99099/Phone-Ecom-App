import { createSlice } from "@reduxjs/toolkit";

const localStorageData = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : []; // Return saved cart or empty array
};

const initialState = localStorageData();

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
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    incrementQty: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decrementQty: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: () => {
      localStorage.removeItem("cart");
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
