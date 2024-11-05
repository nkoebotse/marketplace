import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';  // Path to your cartSlice

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
