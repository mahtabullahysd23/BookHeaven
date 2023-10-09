import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: {},
    numberOfItems: 0,
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
        addNumberOfItems: (state, action) => {
            state.numberOfItems = action.payload;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity,addNumberOfItems } = Slice.actions;

export default Slice.reducer;
