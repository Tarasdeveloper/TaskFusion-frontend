import { createSlice } from '@reduxjs/toolkit';
import { getTasksThunk } from './operations';

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,

  extraReducers: (builder) =>
    builder
      // -----------GetTasks-------------
      .addCase(getTasksThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTasksThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
      })
      .addCase(getTasksThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const tasksReducer = tasksSlice.reducer;
