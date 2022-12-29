import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../dataManager/myAxios";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const __getInsta = createAsyncThunk(
  "insta/getInsta",
  async (_, thunkAPI) => {
    try {
      const { data } = await myAxios.get("api/posting");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [__getInsta.pending]: (state) => {
      state.isLoading = true;
    },
    [__getInsta.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__getInsta.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
