import { createSlice } from "@reduxjs/toolkit";
import { getUserData } from "../actions/UserAction";

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
    [getUserData.pending]: (state) => {
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

export default userSlice.reducer;
