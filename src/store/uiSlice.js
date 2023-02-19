import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsShown: false, searchIsOn: false, prodIsShown: true },
  reducers: {
    toggleCartVisibility(state) {
      state.cartIsShown = !state.cartIsShown;
    },
    setSearchIsOn(state) {
      state.searchIsOn = true;
    },
    setSeachIsoff(state) {
      state.searchIsOn = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
