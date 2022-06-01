import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IGif, UserInput} from "./../../types";

interface UserState {
  username: null | string;
  isLogin: boolean;
  likedGifs: IGif[];
}

const initialState: UserState = {
  username: null,
  isLogin: false,
  likedGifs: [],
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
    userLikedGif(state, action: PayloadAction<IGif>) {
      state.likedGifs.push(action.payload);
    },
    userDeletedLikedGif(state, action: PayloadAction<IGif>) {
      const {id} = action.payload;

      state.likedGifs = state.likedGifs.filter((item) => item.id !== id);
    },
    /* userDeletedAllLikedGif(state) {
      state.likedGifs = [];
    }, */
  },
});

export const {userLogin, userLogout, userLikedGif, userDeletedLikedGif} = userSlice.actions;

export default userSlice.reducer;
