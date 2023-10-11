import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterString: "/books?",
};

const Slice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        addFilter: (state, action) => {
            state.filterString = action.payload;
        },
        deleteFilter: (state, action) => {
            state.filterString = "/books?";
        },
    },
});

export const { addFilter, deleteFilter } = Slice.actions;

export default Slice.reducer;