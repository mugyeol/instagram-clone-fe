import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import myAxios from "../../dataManager/myAxios";

const initialState = {
  hashTagList: [],
  isLoading: false,
  error: null,
};

export const __getHashTagList = createAsyncThunk(
  "hashtag",
  async (payload, thunkAPI) => {
    try {
      const data = await myAxios.get(`api/posting/hashtag/${payload}`);
      console.log('hash',data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const hashSlice = createSlice({
  name: "hashTag",
  initialState,
  reducers: {},
  extraReducers: {
    [__getHashTagList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getHashTagList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hashTagList = action.payload;
    },
    [__getHashTagList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default hashSlice.reducer;
