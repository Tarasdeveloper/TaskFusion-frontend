import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { formatISO } from 'date-fns';
import { getTasksForMonth } from './calendarMonth.operations';

const calendarMonthInitState = {
  currentDate: formatISO(new Date(), {
    representation: 'date',
  }),
  data: [], //list of tasks
  isLoading: false,
  error: null,
};

const calendarMonthSlice = createSlice({
  name: 'calendar',
  initialState: calendarMonthInitState,
  reducers: {
    addCurrentMonth(state, { payload }) {
      state.currentDate = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasksForMonth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTasksForMonth.fulfilled, (state, { payload }) => {
        state.tasks = [...payload];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getTasksForMonth.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const { addCurrentMonth } = calendarMonthSlice.actions;
export const calendarMonthReducer = persistReducer(
  {
    key: 'calendar',
    storage,
    whitelist: ['currentDate'],
  },
  calendarMonthSlice.reducer,
);
