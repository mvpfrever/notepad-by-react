import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./edit.js";

const store = configureStore({
  reducer: reducer,
});

export default store;
