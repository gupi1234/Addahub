import { configureStore } from "@reduxjs/toolkit";
import ownProfile from "./Slice/postsSlice";

export const store = configureStore({
  reducer: {
    ownProfile,
  },
});
