import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../dataManager/myAxios";

const initialState = {
  postList: [],
  isNewUpload : false,
  isLoading: false,
  error: null,
};

export const __getInsta = createAsyncThunk(
  "insta/getInsta",
  async (_, thunkAPI) => {
    try {
      const res = await myAxios.get("api/posting");
      console.log("res", res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __deletePost = createAsyncThunk(
  "__deletePost",
  async (payload, thunkAPI) => {
    try {
      console.log("res", payload.postId);
      const res = await myAxios.delete(`api/posting/${payload.postId}`);
      console.log('res',res)
      
      return payload.postId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __uploadPost = createAsyncThunk(
  "__uploadPost",
  async (payload, thunkAPI) => {
    try {
      console.log("payload", payload);
      const res = await myAxios.post("/api/posting", payload);
      console.log('res',res)
      
      return payload
    } catch (error) { 
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    __postUploaded: (state, action) => {
      state.postList = [...state.postList]
    },

  },
  extraReducers: {
    [__getInsta.pending]: (state) => {
      state.isLoading = true;
    },
    [__getInsta.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.postList = action.payload;
    },
    [__getInsta.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      const index = state.postList.findIndex(
        (post) => post.id === action.payload
      );
      const arr = [...state.postList];
      arr.splice(index, 1);
      state.postList = arr;
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__uploadPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__uploadPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isNewUpload = !state.isNewUpload;
    },
    [__uploadPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {__postUploaded,} = postSlice.actions;
export default postSlice.reducer;
