import { configureStore } from "@reduxjs/toolkit";
import leftSideBarReducer from "./leftSideBarSlice";  // Import the new slice

const store = configureStore({
  reducer: {
    leftSideBar: leftSideBarReducer,  // Add the leftSideBar slice reducer to the store
  },
});

export default store;
    