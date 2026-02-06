import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSlice";
import authReducer from "./AuthSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
  },
});
