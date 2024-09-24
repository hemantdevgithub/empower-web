import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  isList: boolean;
};
const initialState: TInitialState = {
  isList: true,
};

const myPostSlice = createSlice({
  name: "myPost",
  initialState,
  reducers: {
    onViewToggle: (state) => {
      state.isList = !state.isList;
    },
  },
});

export const myPostReducer = myPostSlice.reducer;
export const { onViewToggle } = myPostSlice.actions;
export const selectIsList = (state: RootState) => state.myPost.isList;
