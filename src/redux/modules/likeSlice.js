import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  insta: [],
  isLoading: false,
  error: null,
};

export const __postLike = createAsyncThunk(
  "like/postLike",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/insta");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  extraReducers: {
    [__postLike.pending]: (state) => {
      state.isLoading = true;
    },
    [__postLike.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.insta = action.payload;
    },
    [__postLike.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default likeSlice.reducer;
