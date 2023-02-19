import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  isSidebarClosed: false,
  selectedTerm: "",
  reposList: [],
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.isSidebarClosed = !state.isSidebarClosed;
    },
  },
});

const selectedTermSlice = createSlice({
  name: "selectedTerm",
  initialState: initialState,
  reducers: {
    setSelectedTerm(state, action) {
      state.selectedTerm = action.payload;
    },
  },
});

const reposListSlice = createSlice({
  name: "reposList",
  initialState: initialState,
  reducers: {
    setReposList(state, action) {
      state.reposList = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    selectedTerm: selectedTermSlice.reducer,
    reposList: reposListSlice.reducer,
  },
});

export const sidebarActions = sidebarSlice.actions;
export const selectedTermActions = selectedTermSlice.actions;
export const reposListActions = reposListSlice.actions;

export default store;
