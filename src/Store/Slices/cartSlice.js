import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: {},
};

const Slice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = { ...state.cart, ...action.payload };
        },
        removeFromCart: (state, action) => {
            delete state.cart[action.payload];
        },
        updateQuantity: (state, action) => {
            state.cart[action.payload.id].quantity = action.payload.quantity;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = Slice.actions;

export default Slice.reducer;
