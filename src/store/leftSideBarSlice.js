import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "Dashboard",
};

const leftSideBarSlice = createSlice({
  name: "leftSideBar",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload; 
    },
  },
});

export const { setActiveTab } = leftSideBarSlice.actions;
export default leftSideBarSlice.reducer;
