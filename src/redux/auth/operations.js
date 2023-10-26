import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const $instance = axios.create({
  baseURL: 'https://taskfusion-service.onrender.com/',
});

export const setToken = (token) => {
  $instance.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const clearToken = () => {
  $instance.defaults.headers['Authorization'] = '';
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const { data } = await $instance.post('/auth/register', userData);
      setToken(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const { data } = await $instance.post('/auth/login', userData);
      setToken(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    if (!token) return thunkApi.rejectWithValue(null);

    try {
      setToken(token);
      const { data } = await $instance.get('/users/current');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(null);
    }
  },
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      const { data } = await $instance.post('/auth/logout');
      clearToken();

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const updateUserThunk = createAsyncThunk(
  'auth/user',
  async (credentials, thunkAPI) => {
    try {
      const response = await $instance.patch('/users/edit', credentials);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const UpdateTokenThunk = createAsyncThunk(
  'auth/updatetoken',
  (token, thunkApi) => {
    try {
      setToken(token);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
