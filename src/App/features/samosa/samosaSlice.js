import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number_of_samosa: 10,
};

const samosaSlice = createSlice({
  name: "samosa",
  initialState,
  reducers: {
    buy_samosa: (state, action) => {
      state.number_of_samosa = state.number_of_samosa - action.payload;
    },
    make_samosa: (state, action) => {
      state.number_of_samosa = state.number_of_samosa + action.payload;
    },
  },
});

export const samosaReducer = samosaSlice.reducer;
export const samosaActions = samosaSlice.actions;
