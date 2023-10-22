import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setToken } from '../auth/operations';
import { selectToken } from '../auth/selectors';

export const $instance = axios.create({
  baseURL: 'https://taskfusion-service.onrender.com/',
});

export const getTasksForMonth = createAsyncThunk(
  'get/tasks',
  async (date, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = selectToken(state);
    if (!token) {
      return thunkAPI.rejectWithValue('Error of authorization');
    }
    try {
      const { data } = await $instance.get(
        `tasks?year=${date.year}&month=${+date.month + 1}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
