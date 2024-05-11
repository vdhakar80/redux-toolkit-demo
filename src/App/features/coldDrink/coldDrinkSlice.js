import { createSlice } from "@reduxjs/toolkit";
import { samosaActions } from "../samosa/samosaSlice";

const initialState = {
  number_of_colddrink: 10,
};

const colddrinkSlice = createSlice({
  name: "colddrink",
  initialState,
  reducers: {
    buy_coldDrink: (state, action) => {
      state.number_of_colddrink = state.number_of_colddrink - action.payload;
    },
    add_coldDrink: (state, action) => {
      state.number_of_colddrink = state.number_of_colddrink + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(samosaActions.buy_samosa, (state) => {
      state.number_of_colddrink = state.number_of_colddrink - 1;
    });
  },
});

export const colddrinkReducer = colddrinkSlice.reducer;
export const colddrinkActions = colddrinkSlice.actions;
