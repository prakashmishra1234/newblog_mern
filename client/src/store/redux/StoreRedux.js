import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import PostReducers from "./reducers/PostReducers";

const StoreRedux = configureStore({
  reducer: {
    userData: userReducer,
    allPost: PostReducers,
  },
});

export default StoreRedux;
