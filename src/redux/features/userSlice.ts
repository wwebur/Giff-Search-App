import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {UserInput} from "./../../types";

export interface UserState {
  username: null | string;
  isLogin: boolean;
}

const initialState: UserState = {
  username: null,
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action: PayloadAction<UserInput>) {
      state.username = action.payload.username;
      state.isLogin = true;
    },
    userLogout(state) {
      state.username = null;
      state.isLogin = false;
    },
  },
});

export const {userLogin, userLogout} = userSlice.actions;

export default userSlice.reducer;
