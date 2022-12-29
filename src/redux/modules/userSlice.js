import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../dataManager/myAxios";

const initialState = {
  nickname: "",
  profileImg: "",
  followerCount: 0,
  followingCount: 0,
  isLoading: false,
  error: null,
};

export const __getUser = createAsyncThunk(
  "getUser",
  async (payload, thunkAPI) => {
    try {
      const res = await myAxios.get(`/api/member/info`);
      console.log('res',res)
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [__getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__getUser.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.nickname = action.payload.nickname;
      state.profileImg = action.payload.profileImg;
      state.followerCount = action.payload.followerCount;
      state.followingCount = action.payload.followingCount;
    },
    [__getUser.rejected]: (state, action) => {
      state.isLoading = false;

    },
  },
});
export const {} = userSlice.actions;
export default userSlice.reducer;
