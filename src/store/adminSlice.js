import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: null,
  },
  reducers: {
    login(state, action) {
      state.isAuth = true;
      state.user = action.payload.user;
    },
    logout(state) {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const { login, logout } = adminSlice.actions;
export default adminSlice.reducer;
