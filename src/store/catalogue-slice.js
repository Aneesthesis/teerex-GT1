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
    setCatalogue(state, action) {
      state.items = action.payload.items;
    },

    reInitialiseCatalogue(state, action) {
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
      let items = state.items;
      const matchedItems = [];

      if (state.filteredItems.length > 0) {
        items = state.filteredItems;
      }
      console.log(items.length + "items to search");
      const toSearch = action.payload.trim().toLowerCase();

      items.map((item) => {
        if (item.name.trim().toLowerCase().includes(toSearch)) {
          matchedItems.push(item);
        }
        state.searchedItems = matchedItems;
        console.log(state.searchedItems);
      });
    },

    toggleFilter(state, action) {
      const key = action.payload.id
        .slice(0, 1)
        .toUpperCase()
        .concat(action.payload.id.slice(1));
      const category = action.payload.name;
      //console.log(typeof key, category, state.filteredCategories.length);

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
      let products = state.items;

      for (const i in state.filteredCategories) {
        let filteredProducts = [];
        let checkedBox = state.filteredCategories[i].key;
        let checkedBoxType = state.filteredCategories[i].category;
        let categories = ["price", "gender", "color", "type"];

        if (i < 1) {
          console.log("first iterate");
          if (checkedBoxType === "price") {
            let checkedBoxRange = checkedBox.split(",");
            filteredProducts = products.filter(
              (product) =>
                product.price > checkedBoxRange[0] &&
                product.price <= checkedBoxRange[1]
            );
          }
          // if checkedBoxType is not equal to "price"
          else {
            filteredProducts = products.filter((product) =>
              Object.values(product).includes(checkedBox)
            );
          }
          allfilteredItems = filteredProducts; // Store the results of the first iteration
        } else {
          // Apply AND filter by taking the intersection
          if (checkedBoxType === "price") {
            checkedBox = checkedBox.split(",");
            filteredProducts = allfilteredItems.filter(
              (product) =>
                product.price > checkedBox[0] && product.price <= checkedBox[1]
            );
          }
          // if checkedBoxType is not equal to "price"
          else {
            filteredProducts = allfilteredItems.filter((product) =>
              Object.values(product).includes(checkedBox)
            );
          }
          allfilteredItems = filteredProducts; // Update allfilteredItems with the AND-filtered results
        }
      }
      state.filteredItems = [...new Set(allfilteredItems)] || [];
    },
  },
});

export const catalogueActions = catalogueSlice.actions;
export default catalogueSlice;
