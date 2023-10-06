import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    password: "",
};

const Slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        deleteUser: (state, action) => {
            state.email = "";
            state.password = "";
        },
    },
});

export const { addUser, deleteUser } = Slice.actions;

export default Slice.reducer;