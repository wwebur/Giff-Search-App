import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: any = [];

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    updateImages(state, action: PayloadAction<any>) {
      state = action.payload;
    },
  },
});

export const {updateImages} = imagesSlice.actions;

export default imagesSlice.reducer;
