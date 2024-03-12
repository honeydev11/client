import { authApi } from "@/services/auth";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import { taskApi } from "@/services/task";
import taskReducer from "./slices/TaskSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
    [authApi.reducerPath]: authApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, taskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
