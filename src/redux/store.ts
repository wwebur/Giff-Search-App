import {configureStore} from "@reduxjs/toolkit";

import userReducer from "../redux/features/userSlice";

import imagesReducer from "./features/imagesSlice";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    user: userReducer,
  },
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
