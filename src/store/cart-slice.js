import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalItems: 0, totalCartAmount: 0 },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalItems = action.payload.totalItems;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        if (existingItem.available === existingItem.quantity) {
          existingItem.maxLimit = true;
          return;
        }
        // state.totalItems += 1;
        existingItem.quantity += 1;
        existingItem.totalprice += newItem.price;
      }
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          totalprice: newItem.price,
          quantity: 1,
          available: newItem.available,
          maxLimit: false,
          image: newItem.image,
        });
      }
      state.totalItems += 1;
      state.totalCartAmount += newItem.price;
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const deletedItemIndex = state.items.findIndex((item) => item.id === id);
      const deletedItem = state.items[deletedItemIndex];
      console.log(deletedItem.quantity);
      state.items = state.items.filter((item) => item.id !== id);
      state.totalItems = state.totalItems - +deletedItem.quantity;
      state.totalCartAmount -= deletedItem.totalprice;
    },
    setItemQuantity(state, action) {
      const id = action.payload.id;
      const setQuantity = action.payload.setQuantity;
      const existingItem = state.items.find((item) => item.id === id);
      const existingItemIndex = state.items.findIndex((item) => item.id === id);
      if (setQuantity > existingItem.available) {
        existingItem.maxLimit = true;
        return;
      }
      state.totalItems = state.totalItems - existingItem.quantity;
      existingItem.quantity = setQuantity;
      state.totalItems = state.totalItems + existingItem.quantity;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
