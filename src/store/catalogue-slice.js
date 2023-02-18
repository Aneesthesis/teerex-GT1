import { createSlice } from "@reduxjs/toolkit";

const catalogueSlice = createSlice({
  name: "catalogue",
  initialState: {
    items: [],
    searchedItems: [],
  },
  reducers: {
    initializeCatalogue(state, action) {
      state.items = action.payload.items;
    },
    searchCatalogue(state, action) {
      const matchedItems = [];
      const toSearch = action.payload.trim();
      const expression = new RegExp(`.*${toSearch}.*`, "gi");
      state.items.map((item) => {
        if (expression.test(item.name)) {
          matchedItems.push(item);
          state.searchedItems = matchedItems;
        }
      });
    },
  },
});
export const catalogueActions = catalogueSlice.actions;
export default catalogueSlice;
