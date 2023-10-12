import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    singlebook: null,
    allBooks: [],
    orientation:"book-container"
};

const Slice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addSingleBook: (state, action) => {
            state.singlebook = action.payload;
        },
        addAllBooks: (state, action) => {
            state.allBooks = action.payload;
        },
        changeOrientation: (state, action) => {
            state.orientation = action.payload;
        },
    },
});

export const { addSingleBook, addAllBooks, changeOrientation } = Slice.actions;

export default Slice.reducer;
