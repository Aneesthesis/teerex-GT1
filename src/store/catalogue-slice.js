import { createSlice } from "@reduxjs/toolkit";

const catalogueSlice = createSlice({
  name: "catalogue",
  initialState: {
    items: [],
    searchedItems: [],
    filteredCategories: [],
    filteredItems: [],
  },
  reducers: {
    initializeCatalogue(state, action) {
      state.items = action.payload.items;
    },
    reInitialiseCatalogue(state, action) {
      // state = {
      //   items: state.items,
      //   searchedItems: [],
      //   filteredCategories: [],
      //   filteredItems: [],
      // };
      let noSearchedItems = [];
      let noFilteredCategories = [];
      let noFilteredItems = [];
      let origCatalogue = state.items;

      state.items = origCatalogue;
      state.searchedItems = noSearchedItems;
      state.filteredCategories = noFilteredCategories;
      state.filteredItems = noFilteredItems;
    },
    searchCatalogue(state, action) {
      state.searchedItems = [];
      const matchedItems = [];
      let items = state.items;
      if (state.filteredItems.length !== 0) {
        items = state.filteredItems;
      }
      console.log(items);
      const toSearch = action.payload.trim().toLowerCase();

      //const expression = new RegExp(`.*${toSearch}.*`, "gi");

      items.map((item) => {
        if (item.name.trim().toLowerCase().includes(toSearch)) {
          matchedItems.push(item);
          state.searchedItems = matchedItems;
        }
      });
    },
    catalogueFilterCategories(state, action) {
      let id = action.payload;
      let value = id.slice(0, 1).toUpperCase().concat(id.slice(1));
      const currentIndex = state.filteredCategories.indexOf(value);

      if (currentIndex === -1) {
        state.filteredCategories.push(value);
      } else {
        state.filteredCategories.splice(currentIndex, 1);
      }
    },
    filterCatalogue(state, action) {
      let allfilteredItems = [];

      for (let category of state.filteredCategories) {
        let products = state.items;
        let filteredProducts = products.filter((product) =>
          Object.values(product).includes(category)
        );
        allfilteredItems.push(...filteredProducts);
      }
      state.filteredItems = allfilteredItems;
    },
  },
});

export const catalogueActions = catalogueSlice.actions;
export default catalogueSlice;
