import CartSlice from "./CartSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cartStorage: CartSlice,
  },
});

export default store;
