import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {searchGif} from "../../api";

const fetchGifByQuery = createAsyncThunk(
  "images/fetchGifByQuery",
  async (query: string, thunkAPI) => {
    const response = await searchGif(query);
    /* return response.data */
  },
);

const initialState = {
  value: "",
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    newQuery: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {newQuery} = imagesSlice.actions;

export default imagesSlice.reducer;

//.dispatch(fetchGifByQuery(query))
