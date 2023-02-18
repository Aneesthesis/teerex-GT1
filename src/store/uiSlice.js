import { useSelector } from "react-redux";
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
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
