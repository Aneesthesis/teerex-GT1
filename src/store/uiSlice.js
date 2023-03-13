import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsShown: false,
    searchIsOn: false,
    prodIsShown: true,
    filterIsActive: false,
    searchResultIsEmpty: false,
  },
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
    setFilterisOn(state) {
      state.filterIsActive = true;
    },
    setFilterisOff(state) {
      state.filterIsActive = false;
    },
    setSearchResultisNotEmpty(state) {
      state.searchResultIsEmpty = false;
    },
    setSearchResultisEmpty(state) {
      state.searchResultIsEmpty = true;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
