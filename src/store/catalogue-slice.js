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
        state.items = state.filteredItems;
      }
      console.log(state.items + "state.items filter + search");
      const toSearch = action.payload.trim().toLowerCase();

      //const expression = new RegExp(`.*${toSearch}.*`, "gi");

      items.map((item) => {
        if (item.name.trim().toLowerCase().includes(toSearch)) {
          matchedItems.push(item);
          state.searchedItems = matchedItems;
        }
      });
    },
    toggleFilter(state, action) {
      const key = action.payload.id
        .slice(0, 1)
        .toUpperCase()
        .concat(action.payload.id.slice(1));
      const category = action.payload.name;
      console.log(typeof key, category, state.filteredCategories.length);

      if (state.filteredCategories.length === 0) {
        console.log("adding");
        state.filteredCategories.push({ key, category });
      } else {
        let spliced = false;
        console.log("appending");
        for (const i in state.filteredCategories) {
          console.log(i);
          if (state.filteredCategories[i].key === key) {
            state.filteredCategories.splice(i, 1);
            spliced = true;
          }
          console.log(spliced);
        }
        if (!spliced) {
          state.filteredCategories.push({ key, category });
        }
      }
    },

    filterCatalogue(state, action) {
      console.log("yes");
      let allfilteredItems = [];

      for (const i in state.filteredCategories) {
        let filteredProducts = [];
        let checkedBox = state.filteredCategories[i].key;
        let checkedBoxType = state.filteredCategories[i].category;
        let products = state.items;
        let categories = ["price", "gender", "id", "type"];

        let orFilter = true;

        //checking if the checkedBox is from a duplicate checkBoxType, in which case OR filter will be applied else AND filter will be used
        if (i > 0) {
          orFilter = categories.some((category) => category === checkedBoxType);
          console.log(i + "iteration");
          if (!orFilter) {
            orFilter = false;
            products = state.filteredProducts;
          }
        }

        if (checkedBoxType === "price") {
          checkedBox = checkedBox.split(",");
          filteredProducts = products.filter(
            (product) =>
              product.price > checkedBox[0] && product.price <= checkedBox[1]
          );
        }
        // if checkedBoxType not equal to "price"
        else {
          filteredProducts = products.filter((product) =>
            Object.values(product).includes(checkedBox)
          );
        }

        allfilteredItems.push(...filteredProducts);
      }
      state.filteredItems = allfilteredItems;
    },
  },
});

export const catalogueActions = catalogueSlice.actions;
export default catalogueSlice;
