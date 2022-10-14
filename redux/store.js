/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

/**
 * store is the redux store that holds the state of the application
 */
export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
