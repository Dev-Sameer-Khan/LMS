import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./User";
import { bookApi } from "./Books";
import { catApi } from "./Categories";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [catApi.reducerPath]: catApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      bookApi.middleware,
      catApi.middleware
    ),
});
