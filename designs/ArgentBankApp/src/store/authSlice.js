import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
    user: null,
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setCredentials: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.isLogged = false;
    },
  },
});

export const { setToken, setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectisLogged = (state) => state.auth.isLogged;
