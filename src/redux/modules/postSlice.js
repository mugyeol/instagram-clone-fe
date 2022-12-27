import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const __getInsta = createAsyncThunk(
  "getInsta",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/insta");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "insta",
  initialState,
  reducers: {},
  extraReducers: {
    [__getInsta.pending]: (state) => {
      state.isLoading = true;
    },
    [__getInsta.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getInsta.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
