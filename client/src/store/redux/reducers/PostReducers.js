import { createSlice } from "@reduxjs/toolkit";
import { getAllPost } from "../actions/PostAction";

const initialState = {
  posts: [],
  postCount: 0,
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: {
    [getAllPost.pending]: (state) => {
      state.loading = true;
    },
    [getAllPost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.posts = payload.posts;
      state.postCount = payload.postCount;
    },
    [getAllPost.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.posts = [];
    },
  },
});

export default postSlice.reducer;
