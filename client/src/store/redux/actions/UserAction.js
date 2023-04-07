import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get user data
export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (reqBody, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/me`);
      return data.user;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Login
export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (reqBody, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/v1/login`, reqBody);
      return data.user;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//Logout action
export const userLogout = createAsyncThunk(
  "user/userLogout",
  async (reqBody, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/logout`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//Register
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (reqBody, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/v1/register`, reqBody);
      return data.user;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
