import catalogueSlice from "./catalogue-slice";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { catalogue: catalogueSlice.reducer, cart: cartSlice.reducer },
});

export default store;
