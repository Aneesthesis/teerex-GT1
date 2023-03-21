import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsShown: false,
    searchIsOn: false,
    prodIsShown: true,
    filterIsActive: false,
    searchResultIsEmpty: false,
    filterIsVisible: false,
  },
  reducers: {
    setCartVisible(state) {
      state.cartIsShown = true;
    },
    setCartInvisible(state) {
      state.cartIsShown = false;
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
      state.filterIsActive = !state.filterIsActive;
    },
    setSearchResultisNotEmpty(state) {
      state.searchResultIsEmpty = false;
    },
    setSearchResultisEmpty(state) {
      state.searchResultIsEmpty = true;
    },
    setFilterIsVisible(state) {
      state.filterIsVisible = !state.filterIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
