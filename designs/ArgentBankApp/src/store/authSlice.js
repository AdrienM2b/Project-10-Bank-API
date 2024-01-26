import { createSlice } from '@reduxjs/toolkit';
import { login, getProfil } from '../Auth/authServices';

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
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.isLogged = false;
    },
    updateCredentials: (state, action) => {
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
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

export const selectCurrentUser = (state) => state.auth.user;
// export const selectCurrentUserFirstName = (state) => state.auth.user.firstName;
// export const selectCurrentUserLastName = (state) => state.auth.user.lastName;
export const selectCurrentToken = (state) => state.auth.token;
export const selectisLogged = (state) => state.auth.isLogged;
