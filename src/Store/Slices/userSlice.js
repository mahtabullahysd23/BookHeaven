import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
};

const Slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.email = action.payload.email;
        },
        deleteUser: (state, action) => {
            state.email = "logged out";
        },
    },
});

export const { addUser, deleteUser } = Slice.actions;

export default Slice.reducer;