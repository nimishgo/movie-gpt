import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import userConfig from "./userConfig";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    userConfig: userConfig,
  },
});

export default appStore;
