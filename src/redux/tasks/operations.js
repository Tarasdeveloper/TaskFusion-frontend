import { createAsyncThunk } from '@reduxjs/toolkit';

import { $instance } from '../auth/operations';

export const getTasksThunk = createAsyncThunk(
  'tasks/getTasks',
  async (requestedData, thunkApi) => {
    const date = requestedData.split('-');

    try {
      const { data } = await $instance.get(
        `/tasks?year=${date[0]}&month=${date[1]}`,
      );

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const deleteTaskThunk = createAsyncThunk(
  'tasks/deleteTask',
  async (requestedData, thunkApi) => {
    try {
      const { data } = await $instance.delete(`/tasks/${requestedData}`);
      const newData = {
        data: data,
        _id: requestedData,
      };

      return newData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const editTaskThunk = createAsyncThunk(
  'tasks/editTask',
  async ({ _id, values }, thunkAPI) => {
    try {
      const { data } = await $instance.patch(`/tasks/${_id}`, values);

      return data.updatedTask;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addTaskThunk = createAsyncThunk(
  'tasks/addTask',
  async (requestedData, thunkApi) => {
    try {
      const result = await $instance.post('/tasks', requestedData);

      return result;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
