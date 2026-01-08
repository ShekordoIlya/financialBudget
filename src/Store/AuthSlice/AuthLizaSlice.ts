import { createSlice } from "@reduxjs/toolkit";

interface IAuthLiza {
  id: string | number;
  name: string;
  userName: string;
  password: string | number;
}

const initialState: IAuthLiza = {
  id: 2,
  name: "Елизавета",
  userName: "Liza",
  password: "123321qwe",
};

const AuthLizaSlice = createSlice({
  name: "Authorization Liza",
  initialState: initialState,
  reducers: {},
});

export default AuthLizaSlice.reducer;
