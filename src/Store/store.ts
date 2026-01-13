import { configureStore } from "@reduxjs/toolkit";
import AuthSliceIlya from "./AuthSlice/AuthSliceIlya";
import AuthLizaSlice from "./AuthSlice/AuthLizaSlice";

export const store = configureStore({
  reducer: {
    Ilya: AuthSliceIlya,
    Liza: AuthLizaSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
