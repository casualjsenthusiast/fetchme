import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { isSidebarClosed: false };

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.isSidebarClosed = !state.isSidebarClosed;
    },
  },
});

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
  },
});

export const sidebarActions = sidebarSlice.actions;

export default store;
