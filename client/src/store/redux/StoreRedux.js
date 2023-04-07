import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";

const StoreRedux = configureStore({
  reducer: {
    userData: userReducer,
  },
});

export default StoreRedux;
