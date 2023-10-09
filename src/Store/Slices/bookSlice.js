import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    singlebook: null,
    allBooks: [],
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
    },
});

export const { addSingleBook, addAllBooks } = Slice.actions;

export default Slice.reducer;
