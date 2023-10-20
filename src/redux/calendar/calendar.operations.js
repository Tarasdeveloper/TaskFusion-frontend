import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as auth from '../auth/operations';

axios.defaults.baseURL = 'https://taskfusion-service.onrender.com';

export const getTasksOfMonth = createAsyncThunk(
  'get/tasks',
  async (date, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (token === null) {
      return thunkAPI.rejectWithValue('Error authorization');
    }

    auth.token.set(token);

    try {
      const { data } = await axios.get(
        `/tasks/query?month=${+date.month + 1}&year=${date.year}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTaskOperation = createAsyncThunk(
  'tasks/addTaskOperation',
  async (taskData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (token === null) {
        return thunkAPI.rejectWithValue('Error authorization');
      }
      auth.token.set(token);

      const response = await axios.post('/tasks', taskData);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);

export const deleteTaskOperation = createAsyncThunk(
  'tasks/deleteTaskOperation',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return { _id: taskId, ...response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTaskOperation = createAsyncThunk(
  'tasks/editTaskOperation',
  async (task, thunkAPI) => {
    try {
      const response = await axios.patch(`/tasks/${task._id}`, task);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
