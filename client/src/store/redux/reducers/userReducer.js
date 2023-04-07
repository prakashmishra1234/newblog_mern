import { createSlice } from "@reduxjs/toolkit";
import {
  getUserData,
  registerUser,
  userLogin,
  userLogout,
} from "../actions/UserAction";

const initialState = {
  data: {},
  loading: false,
  isAuthenticated: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    //get user data
    [getUserData.pending]: (state) => {
      state.loading = true;
    },
    [getUserData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.data = payload;
      state.error = null;
    },
    [getUserData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = payload;
    },

    //Login
    [userLogin.pending]: (state) => {
      state.loading = true;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.data = payload;
      state.error = null;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = payload;
    },

    //Logout
    [userLogout.pending]: (state) => {
      state.loading = true;
    },
    [userLogout.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.data = {};
      state.error = null;
    },
    [userLogout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = payload;
    },

    //Register
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.data = payload;
      state.error = null;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
