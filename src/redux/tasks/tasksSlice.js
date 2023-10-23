import { createSlice } from '@reduxjs/toolkit';
import { deleteTaskThunk, editTaskThunk, getTasksThunk } from './operations';

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
        console.log(action.payload.id);
        state.tasks = state.tasks.filter(
          (task) => task._id !== action.payload.id,
        );
        console.log(state.tasks);
      })
      .addCase(deleteTaskThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const tasksReducer = tasksSlice.reducer;
