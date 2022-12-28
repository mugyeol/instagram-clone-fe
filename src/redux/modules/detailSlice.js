import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../dataManager/myAxios";
export const __getPostDetail = createAsyncThunk(
  "getPostDetail",
  async (payload, thunkAPI) => {
    try {
      console.log("getPostDetail payload", payload);
      const res = await myAxios.get(`/api/posting/${payload}`);
      console.log("date get post", res);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      console.log("get post error", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const __submitComment = createAsyncThunk(
  "submitComment",
  async (payload, thunkAPI) => {
    try {
      const res = await myAxios.post(
        `/api/posting/${payload.postId}/comments`,
        payload.comment
      );
      console.log("submitComment res", res);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      console.log("submitComment error", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const __liking = createAsyncThunk(
  "postLike",
  async (payload, thunkAPI) => {
    try {
      const res = await myAxios.put(
        `/api/like/posting/${payload.postId}`,
        payload.like
      );
      console.log("postLike res", res);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      console.log("postLike error", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  userNickname: "",
  postDetail: {},
  comments: [],
  imgList:[],
  comment: "",
  isLoading: false,
  error: null,
};
const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    __typeComment: (state, action) => {
      state.comment = action.payload;
    },
  },
  extraReducers: {
    [__getPostDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPostDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.postDetail = action.payload.postDetail;
      state.comments = action.payload.commentList;
      state.imgList = action.payload.imgList;
    },
    [__getPostDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__submitComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__submitComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = '';
      state.comments = [action.payload, ...state.comments]
    },
    [__submitComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__liking.pending]: (state) => {
      state.isLoading = true;
    },
    [__liking.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.postDetail.postingLike = action.payload.like
      state.postDetail.likeCount = action.payload.likeCount
    },
    [__liking.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {__typeComment} = detailSlice.actions;
export default detailSlice.reducer;
