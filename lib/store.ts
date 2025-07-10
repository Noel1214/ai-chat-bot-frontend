import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./features/messages/messagesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      messages: messageReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
