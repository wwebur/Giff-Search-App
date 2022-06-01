import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IGif} from "./../../types";

interface ImagesState {
  images: IGif[];
  wordSearch: string;
}

const initialState: ImagesState = {
  images: [],
  wordSearch: "",
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    updateImages(state, action: PayloadAction<IGif[]>) {
      state.images = action.payload;
    },
    likedImage(state, action: PayloadAction<string>) {
      const itemIndex = state.images.findIndex((item) => item.id === action.payload);

      state.images[itemIndex].isLiked = true;
    },
    unlikedImage(state, action: PayloadAction<string>) {
      const itemIndex = state.images.findIndex((item) => item.id === action.payload);

      state.images[itemIndex].isLiked = false;
    },
    changedWordSearch(state, action: PayloadAction<string>) {
      state.wordSearch = action.payload;
    },
  },
});

export const {updateImages, likedImage, unlikedImage, changedWordSearch} = imagesSlice.actions;

export default imagesSlice.reducer;
