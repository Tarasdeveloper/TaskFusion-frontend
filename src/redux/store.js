import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { reviewReducer } from './reviews/reviewSlice';
import { calendarMonthReducer } from './calendarMonth/calendarMonth.slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themeSlise from './theme/themeSlise';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    reviews: reviewReducer,
    theme: persistReducer(themePersistConfig, themeSlise),
    calendar: calendarMonthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
