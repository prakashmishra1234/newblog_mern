import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/me`);
      return data.user;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
