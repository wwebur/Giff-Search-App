import {createSlice} from "@reduxjs/toolkit";

export interface ShareButtonState {
  value: boolean;
}

const initialState: ShareButtonState = {
  value: false,
};

export const ShareButtonSlice = createSlice({
  name: "shareButton",
  initialState,
  reducers: {
    open: (state) => {
      state.value = false;
    },
  },
});
