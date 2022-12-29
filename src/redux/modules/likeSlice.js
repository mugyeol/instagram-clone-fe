import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../dataManager/myAxios";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const __postLike = createAsyncThunk(
  "like/postLike",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await myAxios.put(`/api/like/posting/${payload}`);
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
      state.data = action.payload;
    },
    [__postLike.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default likeSlice.reducer;
