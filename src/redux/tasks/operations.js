import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instance } from '../auth/operations';

export const getTasksThunk = createAsyncThunk(
  'tasks/getTasks',
  async (requestedData, thunkApi) => {
    try {
      const {data} = await $instance.get(
        `/tasks?year=${requestedData.year}&month=${requestedData.month}`,
      );
      console.log('res: ', data);

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
        id : requestedData
      }

      return newData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
export const editTaskThunk = createAsyncThunk(
  'reviews/editReviews',
  async ({id, task }, thunkAPI) => {
    try {
      const { data } = await $instance.patch(`/tasks/${id}`, task);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
