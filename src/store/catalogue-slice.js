import { createSlice } from "@reduxjs/toolkit";

const catalogueSlice = createSlice({
  name: "catalogue",
  initialState: {
    items: [],
    searchedItems: [],
    filteredCategories: [],
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
    filterCatalogue(state, action) {
      let id = action.payload;
      let value = id.slice(0, 1).toUpperCase().concat(id.slice(1));
      const currentIndex = state.filteredCategories.indexOf(value);

      if (currentIndex === -1) {
        state.filteredCategories.push(value);
      } else {
        state.filteredCategories.splice(currentIndex, 1);
      }
    },
  },
});
export const catalogueActions = catalogueSlice.actions;
export default catalogueSlice;
