import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../tasks/slice";
import authReducer from "../auth/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
