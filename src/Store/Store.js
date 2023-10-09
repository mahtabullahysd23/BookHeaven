import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import modalReducer from "./Slices/modalSlice";
import filterReducer from "./Slices/filterSlice";
import cartReducer from "./Slices/cartSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    filter: filterReducer,
    cart : cartReducer,

  },
});
export default store;