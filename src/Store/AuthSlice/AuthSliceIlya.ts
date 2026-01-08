import { createSlice } from "@reduxjs/toolkit";

interface IAuthIlya {
  id: string | number;
  name: string;
  userName: string;
  password: string | number;
}

const initialState: IAuthIlya = {
  id: 1,
  name: "Илья",
  userName: "Ilya",
  password: "123321qwe",
};

const AuthSliceIlya = createSlice({
  name: "Authorization",
  initialState: initialState,
  reducers: {},
});

export default AuthSliceIlya.reducer;
