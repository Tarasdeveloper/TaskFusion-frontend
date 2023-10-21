import { createSlice } from '@reduxjs/toolkit';
import {
  UpdateTokenThunk,
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  registerThunk,
  updateUserThunk,
} from './operations';

const initialState = {
  userData: {
    _id: null,
    name: null,
    email: null,
    avatar: null,
    phone: null,
    skype: null,
    birthDay: null,
  },
  token: null,
  isLoading: false,
  isUpdating: false,
  error: null,
  isAuthentificated: false,
  isRefreshing: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: (builder) =>
    builder
      // -----------Register-------------
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthentificated = true;
        state.token = action.payload.token;
        state.userData = action.payload.userData;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // -----------Login-------------
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthentificated = true;
        state.token = action.payload.token;
        state.userData = action.payload.userData;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // -----------Refresh-------------
      .addCase(refreshUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthentificated = true;
        state.userData = action.payload;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.rejected, (state) => {
        state.isLoading = false;
        state.isRefreshing = false;
      })
      // -----------Logout-------------
      .addCase(logoutThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthentificated = false;
        state.userData = null;
        state.token = null;
        state.isRegistered = false;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // -----------Update user-------------
      .addCase(updateUserThunk.pending, (state) => {
        state.isLoading = true;
        state.isUpdating = false;
        state.error = null;
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUpdating = true;
        state.userData = action.payload;
      })
      .addCase(updateUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isUpdating = false;
        state.error = action.payload;
      })
      //----------------Update token------------------
      .addCase(UpdateTokenThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(UpdateTokenThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.meta.arg;
      })
      .addCase(UpdateTokenThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action;
      }),
});

export const authReducer = authSlice.reducer;
