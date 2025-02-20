import { configureStore } from "@reduxjs/toolkit";
import leftSideBarReducer from "./leftSideBarSlice"; 

const store = configureStore({
  reducer: {
    leftSideBar: leftSideBarReducer,
  },
});

export default store;
    