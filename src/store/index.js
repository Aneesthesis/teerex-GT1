import catalogueSlice from "./catalogue-slice";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    catalogue: catalogueSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
