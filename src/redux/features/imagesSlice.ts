import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ImagesState {
  images: any[];
}

const initialState: ImagesState = {
  images: [],
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    updateImages(state, action: PayloadAction<any>) {
      state.images = action.payload;
    },
  },
});

export const {updateImages} = imagesSlice.actions;

export default imagesSlice.reducer;
