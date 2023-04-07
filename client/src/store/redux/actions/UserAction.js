import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserData = createAsyncThunk("user/getUserData", async () => {
  try {
    const { data } = await axios.get(`/api/v1/me`);
    return data.user;
  } catch (error) {
    return error;
  }
});

export const loginUser = createAsyncThunk("user/loginUser", async () => {
  try {
    const { data } = await axios.get(`/api/v1/login`);
    return data.user;
  } catch (error) {
    return error;
  }
});
