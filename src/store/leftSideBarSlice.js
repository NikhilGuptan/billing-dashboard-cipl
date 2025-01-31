import { createSlice } from "@reduxjs/toolkit";

// Initial state for the active tab
const initialState = {
  activeTab: "Dashboard",  // Default active tab
};

// Create slice for active tab
const leftSideBarSlice = createSlice({
  name: "leftSideBar",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;  // Set the active tab based on the payload
    },
  },
});

// Export the action to change the active tab
export const { setActiveTab } = leftSideBarSlice.actions;

// Export the reducer to be added to the store
export default leftSideBarSlice.reducer;
