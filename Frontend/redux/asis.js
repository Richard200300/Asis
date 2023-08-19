import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
};

export const asis = createSlice({
  name: "Asis",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCart } = asis.actions;

export default asis.reducer;
