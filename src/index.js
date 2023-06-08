import { createSlice, configureStore } from "@reduxjs/toolkit";

const formEntriesSlice = createSlice({
  name: "formEntries",
  initialState: [],
  reducers: {
    addEntry: (state, action) => {
      state.push(action.payload);
    },
  },
});

const formEntriesReducer = formEntriesSlice.reducer;
export const { addEntry } = formEntriesSlice.actions;
export const store = configureStore({
  reducer: {
    entries: formEntriesReducer,
  },
});
