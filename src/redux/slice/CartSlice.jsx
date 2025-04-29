import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sliceValue: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.sliceValue.push(action.payload);
      console.log(" slice value in add to cart reducer ", state.sliceValue);
    },
    removeToCart: (state, action) => {
      state.sliceValue = state.sliceValue.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
