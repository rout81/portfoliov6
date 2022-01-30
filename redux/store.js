import { configureStore } from "@reduxjs/toolkit";
import { me } from "./services/me";

export const store = configureStore({
  reducer: {
    [me.reducerPath]: me.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(me.middleware),
});
