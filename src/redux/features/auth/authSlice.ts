import { RootState } from "@/redux/store";
import { TUser } from "@/types/global.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  token: string | null;
  user: TUser | null;
};

//  initial state
const initialState: TInitialState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<TInitialState>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    logOut: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { logIn, logOut } = authSlice.actions;

// selector
export const selectToken = (state: RootState) => state.auth.token;
export const selectUser = (state: RootState) => state.auth.user;
export const selectCurrentRole = (state: RootState) =>
  state.auth.user?.current_role;
