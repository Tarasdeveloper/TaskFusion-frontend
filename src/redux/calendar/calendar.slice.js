import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import * as auth from '../auth/auth-operations';

import {
  getTasksOfMonth,
  addTaskOperation,
  editTaskOperation,
  deleteTaskOperation,
} from './calendar.operations';
import { formatISO } from 'date-fns';

const calendarInitState = {
  currentMonth: formatISO(new Date(), {
    representation: 'date',
  }),
  choosedDay: null,
  tasks: [],
  indexCurrentDay: null,
  isLoading: false,
  error: null,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: calendarInitState,

  reducers: {
    addCurrentMonth(state, { payload }) {
      state.currentMonth = payload;
    },
    addIndexCurrentDay(state, { payload }) {
      state.indexCurrentDay = payload;
    },
    addChoosedDay(state, { payload }) {
      state.choosedDay = payload;
    },
    clearTasks(state) {
      state.tasks = [];
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getTasksOfMonth.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTasksOfMonth.fulfilled, (state, { payload }) => {
        state.tasks = [...payload];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getTasksOfMonth.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(auth.logout.fulfilled, () => calendarInitState)

      .addCase(addTaskOperation.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTaskOperation.fulfilled, (state, { payload }) => {
        state.tasks.push(payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addTaskOperation.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteTaskOperation.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTaskOperation.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = state.tasks.filter(task => task._id !== payload._id);
      })
      .addCase(deleteTaskOperation.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(editTaskOperation.pending, state => {
        state.isLoading = true;
      })
      .addCase(editTaskOperation.fulfilled, (state, { payload }) => {
        const index = state.tasks[state.indexCurrentDay].findIndex(
          task => task._id === payload._id
        );
        if (index !== -1) {
          state.tasks[state.indexCurrentDay][index] = payload;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editTaskOperation.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const {
  addCurrentMonth,
  addIndexCurrentDay,
  addChoosedDay,
  clearTasks,
} = calendarSlice.actions;

export const calendarReducer = persistReducer(
  {
    key: 'calendar',
    storage,
    whitelist: ['currentMonth', 'choosedDay', 'indexCurrentDay'],
  },
  calendarSlice.reducer
);
