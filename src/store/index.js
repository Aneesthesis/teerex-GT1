import catalogueSlice from "./catalogue-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { catalogue: catalogueSlice.reducer },
});

export default store;
