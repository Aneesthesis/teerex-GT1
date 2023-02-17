import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalItems: 0 },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalItems = action.payload.totalItems;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.totalItems += 1;
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          totalprice: newItem.price,
          quantity: 1,
          available: newItem.available,
          maxLimit: false,
        });
      }
      if (existingItem) {
        if (existingItem.available === existingItem.quantity) {
          existingItem.maxLimit = true;
          return;
        }
        state.totalItems += 1;
        existingItem.quantity += 1;
        existingItem.totalprice += newItem.price;
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const deletedItem = state.items.filter((item) => item.id !== id);
      deletedItem.quantity = 0;
      deletedItem.totalprice = 0;
      state.totalItems = state.totalItems - deletedItem.quantity;
    },
    setItemQuantity(state, action) {
      const id = action.payload.id;
      const setQuantity = action.payload.quantity;
      const existingItem = state.items.find((item) => item.id === id);

      if (setQuantity > existingItem.available) {
        existingItem.maxLimit = true;
        return;
      }

      existingItem.quantity = setQuantity;
      existingItem.totalprice = existingItem.price * setQuantity;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
