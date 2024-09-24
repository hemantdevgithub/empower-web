import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavState {
    isSideBarOpen: boolean;
}

const initialState: NavState = {
    isSideBarOpen: false,
};

const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        handleSideBar: (state, action: PayloadAction<boolean>) => {
            state.isSideBarOpen = action.payload;
        },
    },
});

export const {handleSideBar} = navSlice.actions;

export default navSlice.reducer;
