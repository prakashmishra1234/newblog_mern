import { createSlice } from "@reduxjs/toolkit";
import { getUserData } from "../actions/UserAction";

const initialState = {
  loading: false,
  data: {},
  isAuthenticated: false,
  error: null,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUserData.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getUserData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.data = payload;
    },
    [getUserData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = payload;
    },
  },
});

export default userReducer.reducer;
