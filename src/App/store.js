import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { samosaReducer } from "./features/samosa/samosaSlice";
import { createLogger } from "redux-logger";
import { colddrinkReducer } from "./features/coldDrink/coldDrinkSlice";
import { userReducer } from "./features/users/userSlice";

const logger = createLogger();
const store = configureStore({
  reducer: {
    samosa: samosaReducer,
    colddrink: colddrinkReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
