import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/CartSlice";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
