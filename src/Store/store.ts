import { configureStore } from "@reduxjs/toolkit";
import AuthSliceIlya from "./AuthSlice/AuthSliceIlya";
import AuthLizaSlice from "./AuthSlice/AuthLizaSlice";

export default configureStore({
  reducer: {
    Ilya: AuthSliceIlya,
    Liza: AuthLizaSlice,
  },
});
