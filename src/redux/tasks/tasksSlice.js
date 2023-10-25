import { createSlice } from '@reduxjs/toolkit';
import { addTaskThunk, deleteTaskThunk, editTaskThunk, getTasksThunk } from './operations';

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
      //-----------Add Task --------------------------
      .addCase(addTaskThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTaskThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = [...state.tasks, action.payload.data.result];
      })
      .addCase(addTaskThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //-----------Edit Task --------------------------
      .addCase(editTaskThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editTaskThunk.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(
          (task) => task._id === action.payload.id,
        );
        state.tasks.splice(index, 1, action.payload);
        state.isLoading = false;
      })
      .addCase(editTaskThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //-----------Delete Task ---------------------
      .addCase(deleteTaskThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTaskThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = state.tasks.filter(
          (task) => task._id !== action.payload.id,
        );
      })
      .addCase(deleteTaskThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const tasksReducer = tasksSlice.reducer;
