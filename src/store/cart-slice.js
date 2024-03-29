import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
    totalCartAmount: 0,
    showMaxLimitErrorModal: false,
  },
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
          state.showMaxLimitErrorModal = true;
          return;
        }
        existingItem.quantity += 1;
        existingItem.totalprice += newItem.price;
      }

      if (!existingItem) {
        //if item's not already present in cart
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

      state.items = state.items.filter((item) => item.id !== id);
      state.totalItems = state.totalItems - +deletedItem.quantity;
      state.totalCartAmount -= deletedItem.totalprice;
    },

    //edit quantity of each item present in cart
    setItemQuantity(state, action) {
      const id = action.payload.id;
      const newQuantity = action.payload.setQuantity;
      const existingItem = state.items.find((item) => item.id === id);

      if (newQuantity > existingItem.available) {
        state.showMaxLimitErrorModal = true;
        return;
      }
      existingItem.quantity = newQuantity;
      existingItem.totalprice = existingItem.price * newQuantity;

      state.totalItems = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalCartAmount = state.items.reduce(
        (acc, item) => acc + item.totalprice,
        0
      );
    },

    closeMaxLimitErrorModal(state) {
      state.showMaxLimitErrorModal = false;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
