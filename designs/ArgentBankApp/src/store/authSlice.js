import { createSlice } from '@reduxjs/toolkit';
import { login, getProfil } from '../Auth/authServices';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
    user: null,
    userFirstName: null,
    userLastName: null,
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setCredentials: (state, action) => {
      state.user = action.payload;
    },
    setNames: (state, action) => {
      state.userFirstName = action.payload.firstName;
      state.userLastName = action.payload.lastName;
      state.isLogged = true;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.isLogged = false;
    },
    updateCredentials: (state, action) => {
      state.userFirstName = action.payload.firstName;
      state.userLastName = action.payload.lastName;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = payload.body.token;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      })
      .addCase(getProfil.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLogged = true;
      });
  },
});

export const { setToken, setCredentials, logOut, updateCredentials, setNames } =
  authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUserFirstName = (state) => state.auth.userFirstName;
export const selectCurrentUserLastName = (state) => state.auth.userLastName;
export const selectCurrentToken = (state) => state.auth.token;
export const selectisLogged = (state) => state.auth.isLogged;
