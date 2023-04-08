import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Get all post
export const getAllPost = createAsyncThunk(
  "post/getAllPost",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/posts?page=${page}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
