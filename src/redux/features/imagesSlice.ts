import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IGif} from "./../../types";

interface ImagesState {
  images: IGif[];
}

const initialState: ImagesState = {
  images: [],
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    updateImages(state, action: PayloadAction<IGif[]>) {
      state.images = action.payload;
    },
  },
});

export const {updateImages} = imagesSlice.actions;

export default imagesSlice.reducer;
