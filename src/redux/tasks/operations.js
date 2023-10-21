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
