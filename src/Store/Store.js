import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import modalReducer from "./Slices/modalSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
});

export default store;