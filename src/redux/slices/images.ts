import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WrappedBuildError } from "next/dist/server/base-server";
import { search } from "../../api";

const fetchGifByQuery= createAsyncThunk(
  'images/fetchGifByQuery',
  async (query: string, thunkAPI) => {
    const response = await search(query)
    return response.data
  }
)

const initialState = {
  value: [],
}

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchGifByQuery.fulfilled, (state, action: PayloadAction<string>)=>{
      state.status = "success"
      state.value.push(action.payload)
    })
    builder.addCase(fetchGifByQuery.pending, (state, action: PayloadAction<string>)=>{
      state.status = "loading"
      state.error = null
    })
    builder.addCase(fetchGifByQuery.rejected, (state, action: PayloadAction<string>)=>{
      state.status = "failed"
    })
	}
})

export default imagesSlice.reducer

//.dispatch(fetchGifByQuery(query))
